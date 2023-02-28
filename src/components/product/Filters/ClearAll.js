import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectMaxPrice } from "../../../redux/slice/productSlice"
import { FILTER_BY_CATEGORY, } from "../../../redux/slice/filterSlice"

import { selectProducts } from "../../../redux/slice/productSlice"

export const ClearAll = () => {
   
    const [price, setPrice] = useState(3000)
    const maxPrice = useSelector(selectMaxPrice)
    const products = useSelector(selectProducts)
    const dispatch = useDispatch()

    const [buttonClicked, setButtonClicked] = useState(true)

    const allCategories = [
        "All",
        ...new Set(products.map((product) => product.category))
      ]
      const [category, setCategory] = useState('All')


    // const clearFilters = () => {
        
    //     dispatch(FILTER_BY_CATEGORY({
    //         products, category
    //     }))
    //     setCategory('All')
    //     setPrice(maxPrice)

    // }

    useEffect(() => {
        setCategory('All')
        setPrice(maxPrice)
        dispatch(FILTER_BY_CATEGORY({
            products, category
        }))
     
    }, [buttonClicked,dispatch,category,maxPrice,products])
    

    return (
        <button className='btn btn-sm' onClick={()=> setButtonClicked(!buttonClicked)} >Clear Filters</button>
    )
}
