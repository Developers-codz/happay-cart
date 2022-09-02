import "./App.css";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Cart, ProductsListing } from "./features";
import { useEffect } from "react";
import {
  addToCartHandler,
  getcartItems,
  qtyDecreaseHandler,
  qtyIncreaseHandler,
  removeFromCartHandler,
} from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  useEffect(()=>{
    let cart =  JSON.parse(localStorage.getItem("cart"));
    console.log(cart)
    dispatch(getcartItems(cart));
},[])

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("cart")) === null) {
      console.log("i run")
      localStorage.setItem("cart", JSON.stringify(cart))
    } 
  }, []);

  


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsListing />} />
        <Route path="/order-summary" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
