"use client";

import { QuantitySelector } from "@/components/QuantitySelector";
import { useState, useTransition } from "react";
import { updateProductQuantity } from "./actions";

interface AddToCartButtonProps {
  productId: string;
  updateProductQuantity: (
    productId: string,
    quantity: number,
    method: string
  ) => Promise<void>;
}

export const AddToCartButton = ({
  productId,
  updateProductQuantity,
}: AddToCartButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  //for quantity
  const [quantity, setQuantity] = useState<number>(0);
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <>
      <QuantitySelector onQuantityChange={handleQuantityChange} />
      <div className="flex items-center gap-2">
        <button
          className="btn-primary btn"
          onClick={() => {
            setSuccess(false);
            startTransition(async () => {
              await updateProductQuantity(productId, quantity, "add");
              setSuccess(true);
            });
          }}
        >
          Add to Cart
        </button>
        {isPending && <span className="loading loading-spinner loading-md" />}
        {!isPending && success && (
          <span className="text-success">Added to Cart.</span>
        )}
      </div>
    </>
  );
};
