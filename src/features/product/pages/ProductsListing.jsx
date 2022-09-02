import "./product.css";
import { ProductCard, ProductHeading } from "../../../components";
import cardData from "../../../data/data.json";
import { useDispatch } from "react-redux";



export const ProductsListing = () => {
  const dispatch = useDispatch()

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
