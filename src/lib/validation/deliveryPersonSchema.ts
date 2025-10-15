import { z } from "zod"; // ✅ use { z } not default import

export const deliveryPersonSchema = z.object({
  name: z.string({ message: "Delivery-person name is required" }),
  phone: z
    .string({ message: "Delivery-person phone is required" })
    .length(14, "Delivery-person phone number must be 14 characters long"),
  wareHousesId: z
    .number({ message: "Warehouse ID should be a number" })
    .int("Warehouse ID must be an integer"),
});
