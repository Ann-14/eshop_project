import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FILTER_BY_CATEGORY,  } from "../../../redux/slice/filterSlice"
import {  selectProducts } from "../../../redux/slice/productSlice"


export const CategoryFilter = () => {
    const dispatch = useDispatch()
    const products = useSelector(selectProducts)
 
    const allCategories = [
        "All",
        ...new Set(products.map((product) => product.category))
      ]
      const [category, setCategory] = useState('All')
    
      const filterProducts = (cat) => {
        setCategory(cat)
        dispatch(FILTER_BY_CATEGORY({
          products, category: cat
        }))
      }
    return (
        <select value={category} onChange={e => filterProducts(e.target.value)} className='select select-primary select-sm w-full max-w-xs'>
          {allCategories.map((cat, index) => {
            return <option key={index}>{cat}</option>;
          })}
        </select>
    );
  }