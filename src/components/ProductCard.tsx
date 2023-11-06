"use client";

import { useState } from "react";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import PriceTag from "./PriceTag";

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

const ProductCard = ({ product, onOpenModal }: ProductCardProps) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <Link href={"/products/" + product.id}>
          <figure>
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={700}
              height={500}
              className="h-70 object-cover"
            />
          </figure>
        </Link>
        <div className="card-body">
          <h2 className="card-title">
            {product.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <PriceTag price={product.price} />
          <div className="card-actions justify-end">
            <button className="btn-accent btn-outline btn">Add to Cart</button>
            <button
              className="btn-accent btn-outline btn"
              onClick={() => onOpenModal(product)}
            >
              Quick Browse
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
