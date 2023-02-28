import React, { useEffect, useState } from 'react'
import { SearchIcon } from '../../UI/SearchIcon'
import { useDispatch, useSelector } from "react-redux"
import {  FILTER_BY_SEARCH,  } from "../../../redux/slice/filterSlice"
import {  selectProducts } from "../../../redux/slice/productSlice"

export const Search = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const products = useSelector(selectProducts)

    useEffect(() => {
        dispatch(FILTER_BY_SEARCH({
          products, search
        }))
      }, [search, products, dispatch])
      
    return (
        <>
            <div className='flex'>
                {/* <BiSearch className='mt-1 md:mt-1 w-6 h-6  mr-1 text-white' /> */}
               <SearchIcon/>
                <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search'  className="input input-bordered input-primary h-8 ml-2"/>
              
            </div>
        </>
    )
}
