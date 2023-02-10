import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filteredProducts: []
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterBySearch(state, action) {
            const { products, search } = action.payload
            const tempProducts = products.filter((products) => products.name.toLowerCase().includes(search.toLowerCase()) || products.category.toLowerCase().includes(search.toLowerCase()))
       
            state.filteredProducts = tempProducts
        }
    }
});

export const { filterBySearch } = filterSlice.actions
export const selectFilteredProducts = (state) => state.filter.filteredProducts
export default filterSlice.reducer