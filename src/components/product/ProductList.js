import { useState } from "react"
import { useSelector } from "react-redux"
import { selectFilteredProducts } from "../../redux/slice/filterSlice"
import { Pagination } from "../pagination/Pagination"
import { Search } from "./Filters/Search"
import { ProductItem } from "./ProductItem"
import { Sort } from "./Filters/Sort"

import { CategoryFilter } from "./Filters/CategoryFilter"
import { PriceFilter } from "./Filters/PriceFilter"
// import { ClearAll } from "./Filters/ClearAll"

export const ProductList = ({ products }) => {
  const [search, setSearch] = useState('')
  const filteredProducts = useSelector(selectFilteredProducts)

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(10)

  // Get Current Products
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  return (
    <>
      {/* ------Filters Navbar-------- */}
      <nav className="bg-gray-800 mb-10">
        <div className="mx-auto  px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Search value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <Sort className=' px-3 py-2 rounded-md text-sm font-medium' />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <CategoryFilter className=' px-3 py-2 rounded-md text-sm font-medium' />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <PriceFilter />
            </div>
            {/* <div className="hidden sm:ml-6 sm:block">
              <ClearAll/>
            </div> */}
          </div>
        </div>
        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden md:visible" id="mobile-menu">
          {/* <a href="/#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Products Filter</a> */}
          <div className=" flex flex-col items-center w-auto px-2 pt-2 pb-3 gap-2">
            <Search />
            <div className="flex ">
              <Sort className='px-3 py-2 rounded-md text-sm font-medium  ' />
            </div>
            <div className="flex ">
              <CategoryFilter className='px-3 py-2 rounded-md text-sm font-medium  ' />
            </div>
            <div className="flex ">
              <PriceFilter />
            </div>
            {/* <div className="flex ">
            <ClearAll />
            </div> */}
          </div>
        </div>
      </nav>
      {/* ------Images Section-------- */}
      <div className=" grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {products.length === 0 ? (
          <p>No products found</p>
        ) :
          (
            currentProducts.map((product) => {
              return (
                <div key={product.id} className='flex justify-center items-center'>
                  <ProductItem product={product} {...product} />
                </div>
              )
            })
          )}
      </div>
      {/* ------Pagination-------- */}
      <div className="flex justify-center mt-24 mb-8 items-center">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
        />
      </div>

    </>
  )
}
