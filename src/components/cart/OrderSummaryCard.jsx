import React from "react";

export const OrderSummaryCard = ({ cart }) => {
  const discount = cart.reduce(
    (acc, curr) =>
      curr.original_price
        ? (acc +=( curr.original_price - curr.final_price)*curr.qty)
        : acc,
    0
  );
  return (
    <div className="order-summary-container">
      <h2 className="order-head">Price Details</h2>
      <ul className="order-desc">
        {cart.map((item) => (
          <li className="distributed price-list">
            <div className="price-desc">
              {item.qty} X $ {item.final_price}.00
            </div>
            <div className="total-price">
              $ {item.qty * item.final_price}.00
            </div>
          </li>
        ))}
      </ul>

      {discount > 0 && (
        <div className="distributed  price-list">
          <div className="price-desc self-justified">Total Savings</div>
          <div className="total-price disc-price">
            - $ {discount}
            .00
          </div>
        </div>
      )}

      <div className="distributed  price-list">
        <div className="price-desc">Delivery Charge</div>
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
          {cart.reduce((acc, curr) => (acc += curr.final_price * curr.qty), 0)}
        </div>
      </div>
      <div className="centered">
        <button className="btn-order pointer">Place Order</button>
      </div>
    </div>
  );
};
