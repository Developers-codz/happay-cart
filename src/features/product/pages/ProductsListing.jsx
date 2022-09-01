import "./product.css";
import { ProductCard, ProductHeading } from "../../../components";
import cardData from "../../../data/data.json";

export const ProductsListing = () => {
  return (
    <main className="product-wrapper">
      <ProductHeading />
     
        <ul className="cards-container">
          {cardData.map((ele, i) => (
            <ProductCard item={ele} key={i} />
          ))}
        </ul>
    </main>
  );
};
