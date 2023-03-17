import { Feed } from "feed";
import { type z } from "zod";
import { productsSchema } from "./schema";

type ProductsData = z.infer<typeof productsSchema>;

export default function generateProductFeed(
  productsData: ProductsData,
): string {
  // Validate data against schema
  const products = productsSchema.parse(productsData);

  const feed = new Feed({
    title: "Linus Tech Tips Store",
    description: "A feed of products from lttstore.com",
    link: "https://example.com/feed",
    id: "",
    copyright: "",
    favicon:
      "https://cdn.shopify.com/s/files/1/0058/4538/5314/files/favicon-32x32.png?crop=center&height=32&v=1614308376&width=32",
    image:
      "https://cdn.shopify.com/s/files/1/0058/4538/5314/files/LTT_Logo.png",
  });

  products.products.forEach((product) => {
    let description = product.body_html || "";

    // Remove style tags from description
    description = description.replace(/<style[^>]*>.*?<\/style>/gs, "");

    // Format price
    const price = parseFloat(product.variants[0].price);
    const formattedPrice = `$${price.toFixed(2)}`;

    // Generate image list
    const images = product.images
      .map((image) => `<img src="${image.src}" alt="${image.alt || ""}">`)
      .join("");

    // Generate content
    const content = `${description}<p>Price: ${formattedPrice}</p>${images}`;

    feed.addItem({
      title: product.title,
      link: `https://www.lttstore.com/products/${product.handle}`,
      description,
      content,
      image: product.images[0] ? product.images[0].src : undefined,
      date: new Date(product.published_at),
      author: [{ name: product.vendor }],
    });
  });

  // Generate RSS feed
  return feed.rss2();
}
