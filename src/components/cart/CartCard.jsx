import React from 'react'
import {QtyButton} from "../button/QtyButton"

export const CartCard = ({cart}) => {
  return (
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
  )
}
