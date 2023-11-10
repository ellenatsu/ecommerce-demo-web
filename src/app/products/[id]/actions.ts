"use server";

import { createCart, getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

//in cart page, can direct edit quantity
export async function updateProductQuantity(
  productId: string,
  quantity: number, //must bigger than 0 judge from outside
  method: string
) {
  const cart = (await getCart()) ?? (await createCart());
  const itemInCart = cart.items.find((item) => item.productId === productId);
  var newQuantity = quantity;

  if (itemInCart) {
    if (method === "add") {
      newQuantity = itemInCart.quantity + quantity;
    } else if (method === "edit") {
    }
    await prisma.cartItem.update({
      where: {
        id: itemInCart.id,
      },
      data: {
        quantity: newQuantity,
      },
    });
  } else {
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId,
        quantity: newQuantity,
      },
    });
  }
  if (method === "edit") {
    revalidatePath("/cart");
  } else if (method === "add") {
    revalidatePath("/products/[id]");
  }
}

//for remove from cart
export async function removeProduct(productId: string) {
  const cart = (await getCart()) ?? (await createCart());
  const itemInCart = cart.items.find((item) => item.productId === productId);

  if (itemInCart) {
    await prisma.cartItem.delete({
      where: {
        id: itemInCart.id,
      },
    });
  }
  revalidatePath("/cart");
}
