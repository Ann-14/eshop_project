import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  SORT_PRODUCTS } from "../../../redux/slice/filterSlice"
import { selectProducts } from "../../../redux/slice/productSlice"

export const Sort = () => {
  const [sort, setSort] = useState('Latest')
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
 
  useEffect(() => {
    dispatch(SORT_PRODUCTS({
      products, sort
    }))
  }, [sort, products, dispatch])

    return (
      <>
       <div>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className='select select-primary select-sm w-full max-w-xs'>
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
  