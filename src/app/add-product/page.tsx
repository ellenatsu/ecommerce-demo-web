import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Product - TaoTaoShop",
  description: "Add product page",
};
//nextjs server action
async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}

export default function AddProductPage() {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form className="flex flex-col justify-start" action={addProduct}>
        <input
          required
          type="text"
          name="name"
          placeholder="Product name"
          className="input-bordered input mb-2 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea-bordered textarea mb-2 w-full"
        />
        <input
          required
          type="url"
          name="imageUrl"
          placeholder="Image URL"
          className="input-bordered input mb-3 w-full"
        />
        <input
          required
          type="number"
          name="price"
          placeholder="price"
          className="input-bordered input mb-3 w-full"
        />
        <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
      </form>
    </div>
  );
}
