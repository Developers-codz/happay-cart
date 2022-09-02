import {configureStore} from "@reduxjs/toolkit"
import cartReducers from "./features/cart/cartSlice"

const reducer = {
    cart:cartReducers
}

const store = configureStore({
    reducer:reducer
})

export default store