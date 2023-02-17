import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FILTER_BY_CATEGORY, FILTER_BY_SEARCH, selectFilteredProducts, SORT_PRODUCTS } from "../../redux/slice/filterSlice"
import { Pagination } from "../pagination/Pagination"
import { Search } from "./Search"
import { ProductItem } from "./ProductItem"
import { Sort } from "./Sort"


export const ProductList = ({ products }) => {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('Latest')
  const dispatch = useDispatch()
  const filteredProducts = useSelector(selectFilteredProducts)
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(4)

  // Get Current Products
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  useEffect(() => {
    dispatch(FILTER_BY_SEARCH({
      products, search
    }))
  }, [search, products, dispatch])

  useEffect(() => {
    dispatch(SORT_PRODUCTS({
      products, sort
    }))
  }, [sort, products, dispatch])

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
    <>
      {/* ------Filters Navbar-------- */}
      <nav className="bg-gray-800 mb-10">
        <div className="mx-auto  px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                <img className="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Search value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <Sort sort={sort} setSort={setSort} className=' px-3 py-2 rounded-md text-sm font-medium' />
            </div>
            <div className="relative ml-3">
              <div className="hidden sm:ml-6 sm:block">
                <select value={category} onChange={(e) => filterProducts(e.target.value)} className='select select-primary select-sm w-full max-w-xs'>

                  {allCategories.map((cat, index) => {
                    return (
                      <option key={index} >{cat}</option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden md:visible" id="mobile-menu">
          {/* <a href="/#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Products Filter</a> */}
          <div className=" flex flex-col items-center w-auto px-2 pt-2 pb-3 gap-2">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <Search value={search} onChange={(e) => setSearch(e.target.value)} />
            <div className=" flex gap-2 ">
              <Sort sort={sort} setSort={setSort} className=' px-3 py-2 rounded-md text-sm font-medium' />
           
              <select value={category} onChange={(e) => filterProducts(e.target.value)} className='select select-primary select-sm '>

                {allCategories.map((cat, index) => {
                  return (
                    <option key={index} >{cat}</option>
                  )
                })}
              </select>
              </div>
            </div>
          </div>
      </nav>

      {/* ------Images Section-------- */}
      <div className=" grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
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
