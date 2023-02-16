import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FILTER_BY_CATEGORY, FILTER_BY_SEARCH, selectFilteredProducts, SORT_PRODUCTS } from "../../redux/slice/filterSlice"
import { Pagination } from "../pagination/Pagination"
import { Search } from "./Search"
import { ProductItem } from "./ProductItem"
import {  Sort } from "./Sort"


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
    products, category:cat}))
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
            <Sort sort={sort} setSort={setSort} className='px-3 py-2 rounded-md text-sm font-medium'/>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        {/* <!-- Profile dropdown --> */}
        <div className="relative ml-3">
        <div>
          <select value={category} onChange={(e) => filterProducts(e.target.value)} placeholder='sort by'>
          {allCategories.map((cat,index) =>{
            return (
              <option key={index} >{cat}</option>
            )
          })}
          </select>
        </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  <div className="sm:hidden md:visible"  id="mobile-menu">
    <div className="space-y-1 px-2 pt-2 pb-3">
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <a href="/#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>
      <Search value={search} onChange={(e) => setSearch(e.target.value)} />
       <Sort sort={sort} setSort={setSort} className='px-3 py-2 rounded-md text-sm font-medium'/>
    </div>
  </div>
</nav>
        
     

      {/* ------Images Section-------- */}
<div className="flex gap-2 items-center">
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          
          currentProducts.map((product) => {
            return (
              <div key={product.id} className=' justify-center'>
                <ProductItem product={product} {...product} />
              </div>
            )
          })
        )}
        </div>
     {/* ------Pagination-------- */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
      />
      
    </>
  )
}
