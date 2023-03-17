import type { NextApiRequest, NextApiResponse } from "next";
import * as z from "zod";
import fetchProducts from "~/utils/fetchProducts";
import generateProductFeed from "~/utils/generateFeed";
import { productsSchema } from "~/utils/schema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const products = await fetchProducts("all");
    const parseResult = productsSchema.safeParse(products);
    if (parseResult.success) {
      // res.setHeader(
      //   "Cache-Control",
      //   "s-maxage=1800, stale-while-revalidate=300",
      // ); // cache is fresh for 30 min, serve stale data for up to 5 min while revalidating
      res.setHeader("content-type", "application/atom+xml");
      res.status(200).send(generateProductFeed(products).atom1());
    } else {
      throw parseResult.error;
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).send(error.message);
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
    return;
  }
}
