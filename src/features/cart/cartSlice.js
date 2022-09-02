import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[],
}


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCartHandler: (state, action) => {
            state.cart = [...state.cart, action.payload];
            console.log(state.cart);
          },
          removeFromCartHandler: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
          },
          qtyIncreaseHandler: (state, action) => {
            const newCart = state.cart.map((item) => {
              if (item.id === action.payload) {
                item.qty += 1;
              }
              return item;
            });
            state.cart = newCart;
          },
          qtyDecreaseHandler: (state, action) => {
            const newCart = state.cart.map((item) => {
              if (item.id === action.payload) {
                item.qty -= 1;
              }
              return item;
            });
            state.cart = newCart;
          },
    }
})

export default cartSlice.reducer;
export const {
  addToCartHandler,
  removeFromCartHandler,
  qtyIncreaseHandler,
  qtyDecreaseHandler,
  addToSaveLaterHandler,

} = cartSlice.actions;