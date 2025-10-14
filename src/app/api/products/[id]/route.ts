/* @next-codemod-ignore */
import { db } from "@/lib/db/db";
import { products } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  request: Request,
  contextPromise: Promise<{ params: { id: string } }>
) {
  const { params } = await contextPromise;
  const id = params.id;
  console.log("id:", id);

  try {
    const product = await db
      .select()
      .from(products)
      .where(eq(products.id, Number(id)))
      .limit(1);

    if (!product.length) {
      return Response.json({ message: "Product not found" }, { status: 404 });
    }

    return Response.json(product[0]);
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
