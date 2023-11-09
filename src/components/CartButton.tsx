"use client";

import { ShoppingCart } from "@/lib/db/cart";
import React from "react";
import { IconCart } from "./svgCollection";
import Link from "next/link";
import { formatPrice } from "@/lib/format";

interface CartButtonProps {
  cart: ShoppingCart | null;
}

export const CartButton = ({ cart }: CartButtonProps) => {
  function closeDropdown() {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem.blur();
    }
  }

  return (
    <div className="dropdown-end dropdown">
      <label tabIndex={0} className="btn-ghost rounded-btn btn-circle btn">
        <div className="indicator">
          <IconCart />
          <span className="badge badge-sm indicator-item">
            {cart?.size || 0}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact z-30 mt-3 w-80 bg-base-100 p-3 shadow"
      >
        <div>
          <div className="max-h-100 overflow-y-auto">
            {cart?.items.map((cartItem) => (
              <>
                <div className="card card-side mb-2 bg-base-100 shadow-sm">
                  <figure className="h-24 w-24">
                    <img
                      src={cartItem?.product.imageUrl}
                      alt={cartItem?.product.name}
                      className="h-full w-full object-cover"
                    />
                  </figure>
                  <div className="align-right card-body p-2">
                    <h2 className="card-title text-sm">
                      {cartItem?.product.name}
                    </h2>
                    <div className="items-between flex gap-5 text-sm">
                      <p>{cartItem?.quantity}</p>
                      {formatPrice(cartItem?.product.price || 0)}
                    </div>

                    <div className="card-actions justify-end">
                      <button className="btn-primary btn-xs btn">Edit</button>
                    </div>
                  </div>
                </div>
              </>
            ))}
            <div className="flex flex-col px-2 py-1 text-right">
              <span className="text-lg font-bold">{cart?.size || 0} Items</span>
              <span className="text-info">
                Subtotal: {formatPrice(cart?.subtotal || 0)}
              </span>
              <div className="card-actions mt-2">
                <Link
                  href="/cart"
                  className="btn-primary btn-block btn"
                  onClick={closeDropdown}
                >
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
