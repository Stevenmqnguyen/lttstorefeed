import * as z from "zod";

export type Collection = "all" | "accessories" | "clothing"; // gear tab refers to the accessoeries collection per lttstore.com

const optionSchema = z.object({
  name: z.string(),
  position: z.number(),
  values: z.array(z.string()),
});

const imageSchema = z.object({
  id: z.number(),
  created_at: z.string().datetime({ offset: true }),
  position: z.number(),
  updated_at: z.string().datetime({ offset: true }),
  product_id: z.number(),
  variant_ids: z.array(z.number()),
  src: z.string().url(),
  width: z.number(),
  height: z.number(),
  alt: z.string().nullable().optional(),
});

const variantSchema = z.object({
  id: z.number(),
  title: z.string(),
  option1: z.string().nullable(),
  option2: z.string().nullable(),
  option3: z.string().nullable(),
  sku: z.string().optional(),
  requires_shipping: z.boolean(),
  taxable: z.boolean(),
  featured_image: imageSchema.nullable(),
  available: z.boolean().optional(),
  price: z.string(),
  grams: z.number(),
  compare_at_price: z.string().nullable(),
  position: z.number(),
  product_id: z.number(),
  created_at: z.string().datetime({ offset: true }),
  updated_at: z.string().datetime({ offset: true }),
});

const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  handle: z.string(),
  body_html: z.string().optional(),
  published_at: z.string().datetime({ offset: true }),
  created_at: z.string().datetime({ offset: true }),
  updated_at: z.string().datetime({ offset: true }),
  vendor: z.string().optional(),
  product_type: z.string().optional(),
  tags: z.array(z.string()),
  variants: z.array(variantSchema).nonempty(),
  images: z.array(imageSchema),
  options: z.array(optionSchema),
});

const productsSchema = z.object({
  products: z.array(productSchema),
});

export { productsSchema, productSchema };
