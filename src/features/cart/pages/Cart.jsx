import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { CartCard, OrderSummaryCard } from "../../../components";
import { useSelector } from "react-redux";
import { LeftArrowIcon } from "../../../assets";

export const Cart = () => {
  const { cart } = useSelector((store) => store.cart);
  return (
    <main className="cart-container">
      <Link to="/" className="home-link ">
        <LeftArrowIcon />
        Back to Home
      </Link>
      <div className="cart-head">Order Summary ({cart.length} Items)</div>
      <div className="centered cards-wrapper ">
        {cart.length > 0 ? (
          <>
           <CartCard cart={cart} />
           <OrderSummaryCard cart={cart} />
          </>
        ) : (
          <h1>Cart is Empty :(</h1>
        )}
      </div>
    </main>
  );
};
