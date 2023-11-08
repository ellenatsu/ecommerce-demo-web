"use client";

import { useTransition } from "react";

interface AddToCartButtonProps {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
}

export const AddToCartButton = ({
  productId,
  incrementProductQuantity,
}: AddToCartButtonProps) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div className="flex items-center gap-2">
      <button className="btn-primary btn" onClick={() => {}}>
        Add to Cart
      </button>
    </div>
  );
};
