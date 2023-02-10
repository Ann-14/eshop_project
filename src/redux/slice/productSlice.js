import { createSlice } from '@reduxjs/toolkit'

const initialState = {
products:[]
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  //Our initial state 'products' receives the AllProducts from the ViewProducts' dispatch
  reducers: {
    STORE_PRODUCTS(state,action){
      state.products = action.payload.products
    }
  }
});

export const {STORE_PRODUCTS} = productSlice.actions
export const selectProducts = (state) => state.product.products;


export default productSlice.reducer