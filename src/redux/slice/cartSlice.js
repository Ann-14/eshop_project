import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';
import { toast } from 'react-toastify';

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalQuantity: 0,
    cartTotalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        ADD_TO_CART(state, action) {
            const productIndex = state.cartItems.findIndex((product) => product.id === action.payload.id)

            if(productIndex >= 0){
                //product already in cart
                state.cartItems[productIndex].cartQuantity += 1
                toast.success(`${action.payload.name} increased to cart`,{position:'top-left'})

            }else{
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.name} added to cart`,{position:'top-left'})

            }
            //save cart to localStorage
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        }
    }
});

export const { ADD_TO_CART } = cartSlice.actions
export const selectCartItems = (state) => state.cart.cartItems
export const selectCartTotalQuantity = (state) => state.cart.selectCartTotalQuantity
export const selectCartTotalPrice = (state) => state.cart.cartTotalPrice

export default cartSlice.reducer