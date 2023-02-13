import { createSlice } from '@reduxjs/toolkit'
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

            if (productIndex >= 0) {
                //product already in cart
                state.cartItems[productIndex].cartQuantity += 1
                toast.info(`${action.payload.name} increased to cart`, { position: 'top-left' })

            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
                toast.info(`${action.payload.name} added to cart`, { position: 'top-left' })

            }
            //save cart to localStorage
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },

        DECREASE_CART(state, action) {
            const productIndex = state.cartItems.findIndex((product) => product.id === action.payload.id)

            if (state.cartItems[productIndex].cartQuantity > 1) {
                state.cartItems[productIndex].cartQuantity -= 1
                toast.info(`${action.payload.name} decreased by one`, { position: 'top-left' })
            } else {
                const updatedCart = state.cartItems.filter((product) => product.id !== action.payload.id)
                state.cartItems = updatedCart
                toast.success(`${action.payload.name} removed from cart`, { position: 'top-left' })
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            }
        },

        REMOVE_FROM_CART(state, action) {
            const updatedCart = state.cartItems.filter((product) => product.id !== action.payload.id)
            state.cartItems = updatedCart
            toast.success(`${action.payload.name} removed from cart`, { position: 'top-left' })
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },

        CALCULATE_TOTAL(state, action) {
            const arr = []
            state.cartItems.map((product) => {
                const { price, cartQuantity } = product
                const singleProductTotal = price * cartQuantity
                return arr.push(singleProductTotal)
            })
            const totalPrice = arr.reduce((acc, curr) => {
                return acc + curr
            }, 0)
            state.cartTotalPrice = totalPrice
        },

        CALCULATE_TOTAL_ITEMS(state, action) {
            const arr = []
            state.cartItems.map((product) => {
                const {cartQuantity } = product
                const singleProductQuantity = cartQuantity
                return arr.push(singleProductQuantity)
            })
            const totalQuantity = arr.reduce((acc, curr) => {
                return acc + curr
            }, 0)
            state.cartTotalQuantity = totalQuantity
            console.log(totalQuantity)
        }
    }
});

export const { ADD_TO_CART, DECREASE_CART, REMOVE_FROM_CART, CALCULATE_TOTAL, CALCULATE_TOTAL_ITEMS } = cartSlice.actions
export const selectCartItems = (state) => state.cart.cartItems
export const selectCartTotalQuantity = (state) => state.cart.cartTotalQuantity
export const selectCartTotalPrice = (state) => state.cart.cartTotalPrice

export default cartSlice.reducer