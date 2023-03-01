import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filteredProducts: []
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        FILTER_BY_SEARCH(state, action) {
            const { products, search } = action.payload
            const tempProducts = products.filter((products) => products.name.toLowerCase().includes(search.toLowerCase()) || products.category.toLowerCase().includes(search.toLowerCase()))

            state.filteredProducts = tempProducts
        },

        SORT_PRODUCTS(state, action) {
            const { products, sort } = action.payload
            const productsCopy = [...products]
            let tempProducts = productsCopy
            if (sort === 'latest') {
                tempProducts = productsCopy
            }

            if (sort === 'lowest-price') {
                tempProducts = productsCopy.slice().sort((a, b) => {
                    return a.price - b.price
                })
            }
            if (sort === 'highest-price') {
                tempProducts = productsCopy.slice().sort((a, b) => {
                    return b.price - a.price
                })
            }
            if (sort === 'a-z') {
                tempProducts = productsCopy.slice().sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
            }
            if (sort === 'z-a') {
                tempProducts = productsCopy.slice().sort((a, b) => {
                    return b.name.localeCompare(a.name)
                })
            }

            state.filteredProducts = tempProducts
        },
       
        FILTER_BY_CATEGORY(state,action){
            const {products,category} = action.payload
            const productsCopy = [...products]
            let tempProducts = productsCopy
            
            if(category === 'All'){
                tempProducts = productsCopy
            }else{
                tempProducts = productsCopy.filter((product => product.category === category))
            }
            state.filteredProducts = tempProducts
        },

        FILTER_BY_PRICE(state,action){
            const {products,price} = action.payload
            const productsCopy = [...products]
            let tempProducts = productsCopy.filter((product) => product.price <= price)

            state.filteredProducts = tempProducts
            
        }

    }
});

export const { FILTER_BY_SEARCH, SORT_PRODUCTS,  FILTER_BY_CATEGORY, FILTER_BY_PRICE} = filterSlice.actions
export const selectFilteredProducts = (state) => state.filter.filteredProducts
export default filterSlice.reducer