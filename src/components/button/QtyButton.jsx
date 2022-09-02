import React from "react";
import { useDispatch } from "react-redux";
import {
  qtyIncreaseHandler,
  qtyDecreaseHandler,
  removeFromCartHandler
} from "../../features/cart/cartSlice";

export const QtyButton = ({ props, item }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`qty-wrapper centered ${
        props === "product" && "product-qty-handler"
      }`}
    >
      <button
        className="qty-btn-minus qty-btn pointer"
        onClick={() => dispatch(item.qty > 1 ? qtyDecreaseHandler(item.id) : removeFromCartHandler(item.id))}
       
      >
        -
      </button>
      <input
        type="text"
        className={`qty-input ${props === "product" && "qty-product-input"}`}
        value={item.qty}
        disabled
      />
      <button
        className="qty-btn-plus qty-btn pointer"
        onClick={() => dispatch(qtyIncreaseHandler(item.id))}
      >
        +
      </button>
    </div>
  );
};
