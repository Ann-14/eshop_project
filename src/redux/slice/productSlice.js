import { createSlice } from '@reduxjs/toolkit'

const initialState = {
products:[]
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  //Our initial state 'products' receives the AllProducts from the ViewProducts' dispatch
  reducers: {
    storeProducts(state,action){
      state.products = action.payload.products
    }
  }
});

export const {storeProducts} = productSlice.actions
export const selectProduct = (state) => state.product.products;


export default productSlice.reducer