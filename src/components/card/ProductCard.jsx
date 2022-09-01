import React from "react";
import "./card.css";

export const ProductCard = ({ item }) => {
  console.log(item);
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
      <div className="card-desc">
          {item.description}
        </div>
        <button className="card-btn">Add To Cart</button>
    </div>
  );
};
