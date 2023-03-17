import { productsSchema, type productSchema } from "./schema"; // import both schemas from a different file
import axios from "axios";
import { z } from "zod";

type Collection = "all" | "gear" | "clothing";

export default async function fetchProducts(
  collection: Collection,
): Promise<z.infer<typeof productsSchema>> {
  let page = 1; // start on page 1 since page 0 is identical to page 1
  const allProducts: z.infer<typeof productSchema>[] = [];
  let hasMoreData = true;

  while (hasMoreData) {
    const response = await axios.get(
      `https://www.lttstore.com/collections/${collection}/products.json?page=${page}`,
    );
    try {
      const verifiedData = productsSchema.parse(response.data);
      if (verifiedData.products.length === 0) {
        hasMoreData = false;
      } else {
        allProducts.push(...verifiedData.products);
        page++;
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw error;
      } else {
        throw new Error("Unknown error occurred");
      }
    }
  }

  const combinedData = { products: allProducts };

  try {
    productsSchema.parse(combinedData);
    return combinedData;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw error;
    } else {
      throw new Error("Unknown error occurred");
    }
  }
}
