import { Product } from "@prisma/client";
import React, { useEffect } from "react";
type Props = {
  product: Product;
  onClose: () => void;
};
const Modal = ({ product, onClose }: Props) => {
  return (
    <div className="z-999 fixed inset-0 flex items-center justify-center bg-slate-900 bg-opacity-70">
      <div className="w-full max-w-lg rounded bg-white p-5">
        <button
          className="btn-secondary btn-md btn-circle btn absolute right-5 top-5"
          onClick={onClose}
        >
          ✕
        </button>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <button className="btn-accent btn-outline btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Modal;
