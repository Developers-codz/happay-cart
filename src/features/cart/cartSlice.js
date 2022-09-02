import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[],
}


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
      getcartItems:(state,action) =>{
        console.log(action.payload)
        state.cart =action.payload
        
      },
        addToCartHandler: (state, action) => {
            state.cart = [...state.cart, action.payload];
            localStorage.setItem("cart", JSON.stringify(state.cart));
            console.log(action.payload);
          },
          removeFromCartHandler: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(state.cart));
          },
          qtyIncreaseHandler: (state, action) => {
            const newCart = state.cart.map((item) => {
              if (item.id === action.payload) {
                item.qty += 1;
              }
              return item;
            });
            state.cart = newCart;
            localStorage.setItem("cart", JSON.stringify(newCart));
          },
          qtyDecreaseHandler: (state, action) => {
            const newCart = state.cart.map((item) => {
              if (item.id === action.payload) {
                item.qty -= 1;
              }
              return item;
            });
            state.cart = newCart;
            localStorage.setItem("cart", JSON.stringify(newCart));
          },
    }
})

export default cartSlice.reducer;
export const {
  getcartItems,
  addToCartHandler,
  removeFromCartHandler,
  qtyIncreaseHandler,
  qtyDecreaseHandler,
  addToSaveLaterHandler,

} = cartSlice.actions;