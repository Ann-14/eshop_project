import { useState } from "react"
import { Search } from "../Search"
import { ProductItem } from "./ProductItem"

export const ProductList = ({products}) => {
  const [search, setSearch] = useState('')
  return (
    <>
    <p>10 Products found</p>
    <div>
     <Search value={search} onChange={(e) => setSearch(e.target.value)}/>
    </div>
    {/* Sort Products */}
    <div>
      <label>Sort by:</label>
      <select>
        <option value='latest'>Latest</option>
        <option value='lowest-price'>Lowest price</option>
        <option value='highest-price'>Highest Price</option>
        <option value='a-z'>A-Z</option>
        <option value='z-a'>Z-A</option>
      </select>
    </div>
    <div>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : ((
        products.map((product)=>{
          return (
            <div key={product.id}>
              <ProductItem product={product} {...product}/>
              </div>
          )
        }))
      )}
    </div>

    </>
  )
}
