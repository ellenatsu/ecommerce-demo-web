"use client";

import { QuantitySelector } from "@/components/QuantitySelector";
import { useState, useTransition } from "react";

interface AddToCartButtonProps {
  productId: string;
  incrementProductQuantity: (
    productId: string,
    quantity: number
  ) => Promise<void>;
}

export const AddToCartButton = ({
  productId,
  incrementProductQuantity,
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
              await incrementProductQuantity(productId, quantity);
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
