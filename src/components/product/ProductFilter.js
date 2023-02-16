import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FILTER_BY_CATEGORY, FILTER_BY_PRICE, FILTER_BY_SEARCH, SORT_PRODUCTS } from "../../redux/slice/filterSlice"
import { selectMaxPrice, selectMinPrice, selectProducts } from "../../redux/slice/productSlice"


export const ProductFilter = () => {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState(3000)
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
const minPrice = useSelector(selectMinPrice)
const maxPrice = useSelector(selectMaxPrice)


const allCategories = [
  "All",
  ...new Set(products.map((product) => product.category))
]

const filterProducts = (cat) => {
setCategory(cat)
dispatch(FILTER_BY_CATEGORY({
  products, category:cat}))
}

useEffect(() => {
dispatch(FILTER_BY_PRICE({
products, price
}))
  
}, [products,price,dispatch])

const clearFilters = () => {
  setCategory('All')
  setPrice(maxPrice)

}


  return (
    <>

      {/* <aside className="flex flex-col"> */}
        
        <div className="flex flex-col">
          {allCategories.map((cat,index) =>{
            return (
              <button key={index} type='button' onClick={() => filterProducts(cat)}>{cat}</button>
            )
          })}
          
        </div>
        <h3>Price</h3>
        <p>{`${price}`}</p>
        <div>
          <input type='range' value={price} onChange={(e) => setPrice(e.target.value)} min={minPrice} max={maxPrice} />
        </div>
        
        <button onClick={clearFilters} >Clear Filters</button>
      {/* </aside> */}
    </>
  )
}
