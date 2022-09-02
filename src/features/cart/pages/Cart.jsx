import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { QtyButton } from "../../../components";
import { useSelector } from "react-redux";

export const Cart = () => {
  const {cart} = useSelector(store => store.cart)
  return (
    <main className="cart-container">
      <Link to="/" className="home-link">
        Back to Home
      </Link>
      <div className="cart-head">Order Summary (3 Items)</div>
      <div className="cards-wrapper centered">
        <div className="cart-product-container">
          <div className="cart-product-head">
            <div className="s-no">S. NO.</div>
            <div className="cart-items-head">ITEMS</div>
            <div className="qty-head">QTY</div>
          </div>
          <ul>
           {cart.map(item =>  (
              <li className="decor-none distributed cart-product-card" key={item.id}>
              <div className="sno">{item.id}</div>
              <div className="product-name">{item.name}</div>
              <QtyButton item={item} />
            </li>
           ))}
          </ul>
        </div>
        <div className="order-summary-container">
          <h2 className="order-head">Price Details</h2>
        </div>
      </div>
    </main>
  );
};
