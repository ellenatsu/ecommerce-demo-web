"use client";
import { Product } from "@prisma/client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Modal from "./Modal";

interface HomeProps {
  products: Product[];
}
export const HomePage = ({ products }: HomeProps) => {
  //for modal open
  const [isModalOpen, setModalOpen] = useState(false);

  const getRandomProduct = (): Product => {
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
  };
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    getRandomProduct()
  );

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };
  //lock the scroll when the modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function to reset the overflow property when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard product={product} onOpenModal={handleOpenModal} />
      ))}
      {isModalOpen && (
        <Modal product={selectedProduct} onClose={() => setModalOpen(false)} />
      )}
    </section>
  );
};
