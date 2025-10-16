import { z } from "zod"; // ✅ use { z } not default import

export const inventoriesSchema = z.object({
  sku: z
    .string({ message: "sku should be string required" })
    .length(8, "sku shoul;d be 8 character long"),
  wareHousesId: z
    .number({ message: "Warehouse ID should be a number" })
    .int("Warehouse ID must be an integer"),
  productId: z
    .number({ message: "productId should be a number" })
    .int("productId must be an integer"),
});
