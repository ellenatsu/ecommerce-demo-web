"use client";

interface AddToCartButtonProps {
  productId: string;
}

export const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  return (
    <div className="flex items-center gap-2">
      <button className="btn-primary btn" onClick={() => {}}>
        Add to Cart
      </button>
    </div>
  );
};
