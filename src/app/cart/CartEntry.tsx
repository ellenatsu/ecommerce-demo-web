"use client";

import { CartItemWithProduct } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";
import { removeProduct } from "../products/[id]/actions";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
  updateProductQuantity: (
    productId: string,
    quantity: number,
    method: string
  ) => Promise<void>;
}

export default function CartEntry({
  cartItem: { product, quantity },
  updateProductQuantity,
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition();

  const quantityOptions: JSX.Element[] = [];
  for (let i = 1; i <= 99; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
          className="rounded-lg"
        />
        <div>
          <Link href={"/products/" + product.id} className="font-bold">
            {product.name}
          </Link>
          <div>Price: {formatPrice(product.price)}</div>
          <div className="my-1 flex items-center gap-2">
            Quantity:
            <select
              className="select-bordered select w-full max-w-[80px]"
              defaultValue={quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                startTransition(async () => {
                  await updateProductQuantity(product.id, newQuantity, "edit");
                });
              }}
            >
              {quantityOptions}
            </select>
            <button
              className="btn-error btn-outline btn-sm btn"
              onClick={() => {
                startTransition(async () => {
                  await removeProduct(product.id);
                });
              }}
            >
              remove
            </button>
          </div>
          <div className="flex items-center gap-3">
            Total: {formatPrice(product.price * quantity)}
            {isPending && (
              <span className="loading loading-spinner loading-sm" />
            )}
          </div>
        </div>
      </div>
      <div className="divider" />
    </div>
  );
}
