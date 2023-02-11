import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FILTER_BY_SEARCH, selectFilteredProducts, SORT_PRODUCTS } from "../../redux/slice/filterSlice"
import { Pagination } from "../pagination/Pagination"
import { Search } from "../Search"
import { ProductItem } from "./ProductItem"

export const ProductList = ({ products }) => {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('Latest')
  const dispatch = useDispatch()
  const filteredProducts = useSelector(selectFilteredProducts)
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(9)

  // Get Current Products
const indexOfLastProduct = currentPage * productsPerPage
const indexOfFirstProduct = indexOfLastProduct - productsPerPage
const currentProducts = filteredProducts.slice(indexOfFirstProduct,indexOfLastProduct)

  
  
  useEffect(() => {
    dispatch(FILTER_BY_SEARCH({
      products, search
    }))
  }, [search,products,dispatch])
 
  useEffect(() => {
    dispatch(SORT_PRODUCTS({
      products, sort
    }))
  }, [sort,products,dispatch])

  
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
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
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
            currentProducts.map((product) => {
              return (
                <div key={product.id}>
                  <ProductItem product={product} {...product} />
                </div>
              )
            }))
          )}
        </div>
        <Pagination
        currentPage = {currentPage}
        setCurrentPage={setCurrentPage}
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        />
      </section>

    </>
  )
}
