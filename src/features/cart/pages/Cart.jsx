import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { QtyButton } from "../../../components";
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
            <div className="cart-product-container">
              <div className="cart-product-head">
                <div className="s-no">S. NO.</div>
                <div className="cart-items-head">ITEMS</div>
                <div className="qty-head">QTY</div>
              </div>
              <ul>
                {cart.map((item) => (
                  <li
                    className="decor-none distributed cart-product-card"
                    key={item.id}
                  >
                    <div className="sno">{item.id}</div>
                    <div className="product-name">
                      {item.name
                        .split(" ")
                        .map(
                          (ele) => ele.charAt(0).toUpperCase() + ele.slice(1)
                        )
                        .join(" ")}
                    </div>
                    <QtyButton item={item} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-summary-container">
              <h2 className="order-head">Price Details</h2>
              <ul className="order-desc">
                {cart.map((item) => (
                  <li className="distributed price-list">
                    <div className="price-desc">
                      {item.qty}* $ {item.final_price}.00
                    </div>
                    <div className="total-price">
                      $ {item.qty * item.final_price}.00
                    </div>
                  </li>
                ))}
              </ul>
              <div className="distributed  price-list">
                <div className="price-desc self-justified">Total Savings</div>
                <div className="total-price">
                  ${" "}
                  {cart.reduce(
                    (acc, curr) =>
                      curr.original_price
                        ? (acc += curr.original_price - curr.final_price)
                        : acc,
                    0
                  )}
                  .00
                </div>
              </div>
              <div className="distributed  price-list">
                <div className="price-desc self-justified">Delivery Charge</div>
                <div className="total-price">$ 5.00</div>
              </div>
              <div className="distributed  price-list tax-wrapper">
                <div className="price-desc self-justified">Taxes and Charges</div>
                <div className="total-price">$ 2.00</div>
              </div>
              <div className="distributed  price-list">
                <div className="price-desc ">To Pay</div>
                <div className="net-price">
                  ${" "}
                  {cart.reduce(
                    (acc, curr) => (acc += curr.final_price * curr.qty),
                    0
                  )}
                </div>
              </div>
              <div className="centered">
                <button className="btn-order pointer">Place Order</button>
              </div>
            </div>
          </>
        ) : (
          <h1>Cart is Empty :(</h1>
        )}
      </div>
    </main>
  );
};
