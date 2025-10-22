import { db } from "@/lib/db/db";
import { products } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> } // 👈 note the Promise type
) {
  const { id } = await context.params; // 👈 await here (not contextPromise)

  try {
    const product = await db
      .select()
      .from(products)
      .where(eq(products.id, Number(id)))
      .limit(1);

    if (!product.length) {
      return Response.json({ message: "Product not found." }, { status: 404 });
    }

    return Response.json(product[0]);
  } catch (err) {
    console.error("Error fetching product:", err);
    return Response.json(
      { message: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
