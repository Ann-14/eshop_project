import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterBySearch, selectFilteredProducts } from "../../redux/slice/filterSlice"
import { Search } from "../Search"
import { ProductItem } from "./ProductItem"

export const ProductList = ({ products }) => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const filteredProducts = useSelector(selectFilteredProducts)
  

  useEffect(() => {
    dispatch(filterBySearch({
      products, search
    }))
  }, [search,products,dispatch])
  
  return (
    <>
      <section className="flex flex-col">
    {/* Search Section */}
    <div className="flex mx-auto">
        <div>
        <p>{filteredProducts.length} Products found</p>
        </div>
        <div>
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
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
        </div>
{/* Images Section */}
        <div className="flex flex-col justify-center ">
          {products.length === 0 ? (
            <p>No products found</p>
          ) : ((
            filteredProducts.map((product) => {
              return (
                <div key={product.id}>
                  <ProductItem product={product} {...product} />
                </div>
              )
            }))
          )}
        </div>
      </section>

    </>
  )
}
