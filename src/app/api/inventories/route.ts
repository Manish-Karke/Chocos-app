import { db } from "@/lib/db/db";
import { inventories, products, wareHouses } from "@/lib/db/schema";
import { inventoriesSchema } from "@/lib/validation/inventorieschema";
import { desc, eq } from "drizzle-orm";

export async function POST(request: Request) {
  const requestData = await request.json();
  let validatedData;

  try {
    validatedData = await inventoriesSchema.parse(requestData);
    console.log(validatedData);
  } catch (error) {
    return Response.json(
      { message: "this iss the error from the inventories" },
      {
        status: 404,
      }
    );
  }

  try {
    const data = await db.insert(inventories).values(validatedData);
    return Response.json(
      {
        message: "ok",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json(
      {
        message: error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const inventors = await db
      .select({
        id: inventories.id,
        sku: inventories.sku,
        wareHouses: wareHouses.id,
        product: products.id,
      })
      .from(inventories)
      .orderBy(desc(inventories.id))
      .leftJoin(wareHouses, eq(inventories.wareHousesId, wareHouses.id))
      .leftJoin(products, eq(inventories.productId, products.id));
    return Response.json(inventors);
  } catch (error) {
    return Response.json({ message: "thsi error is fronm the " });
  }
}
