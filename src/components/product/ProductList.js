import { useState } from "react"
import { Search } from "../Search"

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

    </>
  )
}
