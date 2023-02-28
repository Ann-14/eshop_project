import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  FILTER_BY_PRICE } from "../../../redux/slice/filterSlice"
import { selectMaxPrice, selectMinPrice, selectProducts } from "../../../redux/slice/productSlice"

export const PriceFilter = () => {
    const [price, setPrice] = useState(3000)
    const dispatch = useDispatch()
    const products = useSelector(selectProducts)
    const minPrice = useSelector(selectMinPrice)
    const maxPrice = useSelector(selectMaxPrice)
  
    useEffect(() => {
        dispatch(FILTER_BY_PRICE({
          products, price
        }))
      }, [products, price, dispatch])

    return (
    <div className="flex gap-1">
      <input type='range'  className="range  range-xs range-primary mt-1 border"  value={price} onChange={e => setPrice(e.target.value)} min={minPrice} max={maxPrice} />
      <p className="text-white">{`${price}€`}</p>
    </div>
    );
  }
  