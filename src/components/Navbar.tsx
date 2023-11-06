"use client";
import React, { useState } from "react";
import Link from "next/link";
import { categoryItems } from "@/assets/data/data";
import { IconCart, IconLike, IconMenu, IconSearch } from "./svgCollection";

const Navbar = () => {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      // Perform your search action here
      console.log("Searching for:", query);
    }
  };
  return (
    <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="./" className="flex items-center">
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

        <div className="flex w-[50%] items-center rounded-lg bg-gray-100 p-2 shadow-md">
          <IconSearch />
          <input
            type="text"
            className="w-full bg-gray-100 outline-none"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="align-center flex w-auto justify-center">
          <Link href="./" className="mr-10 block gap-4 rounded">
            <IconLike />
          </Link>
          <Link href="./" className="block gap-4 rounded">
            <IconCart />
          </Link>
        </div>

        <button
          type="button"
          className="mr-3 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
