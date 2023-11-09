import Link from "next/link";
import { categoryItems } from "@/assets/data/data";
import { IconLike, IconMenu, IconSearch } from "./svgCollection";
import { redirect } from "next/navigation";
import { CartButton } from "./CartButton";
import { getCart } from "@/lib/db/cart";

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

const Navbar = async () => {
  const cart = await getCart();

  return (
    <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
            TaoTao Shop
          </span>
        </Link>

        <Link
          href="#"
          className="block rounded py-2 pl-3 pr-4 text-gray-700 dark:text-white md:bg-transparent md:p-0"
        >
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1">
              <IconMenu />
              Category
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box z-[1] w-52 bg-base-100 p-2 shadow"
            >
              {categoryItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Link>

        <div className="flex-none gap-2">
          <form action={searchProducts}>
            <div className="relative flex items-center">
              <IconSearch />
              <input
                name="searchQuery"
                placeholder="Search"
                className="input-bordered input w-full min-w-[100px] rounded-lg bg-gray-100 py-2 pl-10 pr-3 shadow-md"
              />
            </div>
          </form>
        </div>

        <button
          type="button"
          className="ml-3 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
        >
          Sign In
        </button>

        <div className="align-center flex w-auto justify-center">
          <Link href="/" className="mr-10 block gap-4 rounded">
            <IconLike />
          </Link>
          <CartButton cart={cart} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
