import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  qtyIncreaseHandler,
  qtyDecreaseHandler,
  removeFromCartHandler,
} from "../../features/cart/cartSlice";

export const QtyButton = ({ props, item }) => {
  const location = useLocation();


  const dispatch = useDispatch();
  return (
    <div
      className={`qty-wrapper centered ${
        props === "product" && "product-qty-handler"
      }`}
    >
      <button
        className={`qty-btn-minus qty-btn pointer ${
          location.pathname == "/" ? "bg-primary btn-blue" : ""
        }`}
        onClick={() =>
          dispatch(
            item.qty > 1
              ? qtyDecreaseHandler(item.id)
              : removeFromCartHandler(item.id)
          )
        }
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
        className={`qty-btn-plus  qty-btn pointer ${
          location.pathname == "/" ? "bg-primary btn-blue" : ""
        }`}
        
        onClick={() => dispatch(qtyIncreaseHandler(item.id))}
      >
        +
      </button>
    </div>
  );
};
