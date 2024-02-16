import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name: 'Products',
    initialState: {
        cartQuantity: 0,
    },
    reducers: {
        addToCart: (state) => {
            // state.cart.push(action.payload);
            state.cartQuantity += 1
        }
    }
}) 
export const {addToCart} = productSlice.actions;
export default productSlice.reducer