import { prisma } from "@/lib/db/prisma";
import { Product } from "@prisma/client";
import { HomePage } from "@/components/HomePage";

export default async function Home() {
  const products: Product[] = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return <HomePage products={products} />;
}
