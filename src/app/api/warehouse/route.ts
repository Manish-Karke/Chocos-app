import { db } from "@/lib/db/db";
import { wareHouses } from "@/lib/db/schema";
import { warehouseSchema } from "@/lib/validation/wareHouseSchema";
import { desc } from "drizzle-orm";

export async function POST(request: Request) {
  // todo::check auth
  const requestData = await request.json();
  console.log("request", requestData);
  let validatedData;

  try {
    validatedData = await warehouseSchema.parse(requestData);
  } catch (error) {
    return Response.json(
      {
        message: error,
      },
      {
        status: 404,
      }
    );
  }

  try {
    await db.insert(wareHouses).values(validatedData);
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
        message: "failed to store the wareHouse",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request: Request) {
  try {
    const warehouse = await db
      .select()
      .from(wareHouses)
      .orderBy(desc(wareHouses.id));

    return Response.json(
      {
        warehouse,
      }
      // {
      //   status: 200,
      // }
    );
  } catch (error) {
    return Response.json(
      {
        message: "this is the error from warehouse",
      },
      {
        status: 404,
      }
    );
  }
}
