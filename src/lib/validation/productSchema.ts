import z from "zod";

export const productSchema = z.object({
  name: z.string({ message: "name must be string" }),
  image: z.instanceof(File, { message: "product image should be image" }),
  description: z.string({ message: "product description be string" }),
  price: z.number({ message: "product price should be a number" }),
});
