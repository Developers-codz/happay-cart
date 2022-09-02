import React from "react";

export const QtyButton = ({props}) => {
  return (
    <div className={`qty-wrapper centered ${props === "product" && "product-qty-handler"}`}>
      <button className="qty-btn-minus qty-btn pointer">-</button>
      <input type="text" className={`qty-input ${props === "product" && "qty-product-input"}`} disabled />
      <button className="qty-btn-plus qty-btn pointer">+</button>
    </div>
  );
};
