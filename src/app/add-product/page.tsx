export const metadata = {
  title: "Add Product - TaoTaoShop",
  description: "Add product page",
};

async function AddProduct() {}

export default function AddProductPage() {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form className="flex flex-col justify-start">
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
          type="text"
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
        <button type="submit" className="btn-primary btn-block btn">
          Add Product
        </button>
      </form>
    </div>
  );
}
