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
        className="card dropdown-content card-compact z-30 mt-3 w-52 bg-base-100 shadow"
      >
        <div>
          <div className="card-body">
            <span className="text-lg font-bold">{cart?.size || 0} Items</span>
            <span className="text-info">
              Subtotal: {formatPrice(cart?.subtotal || 0)}
            </span>
            <div className="card-actions">
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
  );
};
