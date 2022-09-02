import React from "react";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCartHandler } from "../../features/cart/cartSlice";
import { QtyButton } from "../button/QtyButton";

export const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  const getCurrentItem = (item) => cart.find(it => it.name === item.name);

  return (
    <div className="card">
      <img className="card-img" src={item.img_url} alt="" />
      <div className="card-header">
        <div className="card-name">
          {item.name
            .split(" ")
            .map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1))
            .join(" ")}
        </div>
        <div className="price-wrapper">
          <span className="">
            {item.original_price && (
              <s className="striked-text">${item.original_price}</s>
            )}
            <span className="price">$ {item.final_price}.00</span>
          </span>
        </div>
      </div>
      <div className="card-desc">{item.description}</div>
     {getCurrentItem(item)?.qty > 0 ?<QtyButton props={"product"} item={getCurrentItem(item)} /> : <button
        className="card-btn"
        onClick={() => dispatch(addToCartHandler({ ...item, qty: 1 }))}
      >
        Add To Cart
      </button>}
    </div>
  );
};
