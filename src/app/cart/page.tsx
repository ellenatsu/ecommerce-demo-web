import { getCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import React from "react";
import { updateProductQuantity } from "../products/[id]/actions";
import CartEntry from "./CartEntry";
export const metadata = {
  title: "Your Cart - Tao Tao",
};
const CartPage = async () => {
  const cart = await getCart();

  return (
    <div>
      <h1 className="text-3l mb-6 font-bold">Your Cart</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry
          cartItem={cartItem}
          key={cartItem.id}
          updateProductQuantity={updateProductQuantity}
        />
      ))}
      {!cart?.items.length && <p>Your cart is empty.</p>}
      <div className="flex flex-col items-end sm:items-center">
        <p className="mb-3 font-bold">
          Total: {formatPrice(cart?.subtotal || 0)}
        </p>
        <button className="btn-primary btn sm:w-[200px]">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
