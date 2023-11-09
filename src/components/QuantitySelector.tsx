"use client";
import React, { useState } from "react";

type QuantitySelectorProps = {
  onQuantityChange: (newQuantity: number) => void;
};

export const QuantitySelector = ({
  onQuantityChange,
}: QuantitySelectorProps) => {
  const [quantity, setQuantity] = useState<number>(0);

  const updateQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };

  const handleChange = (e: { target: { value: string } }) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      updateQuantity(newQuantity);
    } else {
      updateQuantity(0);
    }
  };
  return (
    <div>
      <div className="join-vertical join mb-3 lg:join-horizontal">
        <button className="join-item btn" onClick={handleDecrease}>
          -
        </button>
        <div>
          <input
            className="input-bordered input join-item"
            placeholder="Quantity"
            value={quantity}
            onChange={handleChange}
          />
        </div>
        <button className="join-item btn" onClick={handleIncrease}>
          +
        </button>
      </div>
    </div>
  );
};
