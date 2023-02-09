import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useFetchCollection } from "../../hooks/useFetchCollection"
import { selectProduct, storeProducts } from "../../redux/slice/productSlice"
import { ProductFilter } from "./ProductFilter"
import { ProductList } from "./ProductList"

export const Product = () => {
  const { data, loading } = useFetchCollection('products')
  const products = useSelector(selectProduct)
  
  
  const dispatch = useDispatch()

  //we pass data coming from customHook to redux
  useEffect(() => {
    dispatch(
      storeProducts({
        products: data
      }),
    )
  }, [dispatch,data])

  return (
    <section>
      <div>
<aside>
  <ProductFilter/>
</aside>
<div>
  <ProductList products={products}/>
</div>

      </div>
    </section>
  )
}
