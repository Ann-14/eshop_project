import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FILTER_BY_CATEGORY } from "../../redux/slice/filterSlice"
import { selectProducts } from "../../redux/slice/productSlice"


export const ProductFilter = () => {
const products = useSelector(selectProducts)
const [category, setCategory] = useState('All')
const dispatch = useDispatch()
const allCategories = [
  "All",
  ...new Set(products.map((product) => product.category))
]
const filterProducts = (cat) =>{
setCategory(cat)
dispatch(FILTER_BY_CATEGORY({products, category:cat}))
}
  return (
    <>
      <aside className="flex flex-col">
        <h3>Categories</h3>
        <div className="flex flex-col">
          {allCategories.map((cat,index) =>{
            return (
              <button key={index} type='button' onClick={() => filterProducts(cat)}>{cat}</button>
            )
          })}
          
        </div>
        <h3>Price</h3>
        <p>1500</p>
        <div>
          <input type='range' name='price' min='100' max='1000' />
        </div>
        <br />
        <button>Clear Filter</button>
      </aside>
    </>
  )
}
