import { db } from "@/lib/db/db";
import { deliveryPerson } from "@/lib/db/schema";
import { deliveryPersonSchema } from "@/lib/validation/deliveryPersonSchema";

export async function POST(request: Request) {
  const deliveryData = await request.json();
  let validatedData;
  try {
    validatedData = await deliveryPersonSchema.parse(deliveryData);
  } catch (error) {
    return Response.json(
      {
        message: "error form post deliveryPerson Schema",
      },
      {
        status: 400,
      }
    );
  }

  try {
    await db.insert(deliveryPerson).values(validatedData);
    return Response.json(
      {
        message: "ok",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json({ message: "failed to store the delivery-person" });
  }
}
