import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useFetchCollection } from "../../hooks/useFetchCollection"
import { GET_PRICE_RANGE, selectProducts, STORE_PRODUCTS } from "../../redux/slice/productSlice"
import { Loader } from "../Loader"
import { ProductFilter } from "./ProductFilter"
import { ProductList } from "./ProductList"

export const Product = () => {
  const { data, loading } = useFetchCollection('products')
  const products = useSelector(selectProducts)


  const dispatch = useDispatch()

  //we pass data coming from customHook to redux
  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: data
      }),
    );

    dispatch(GET_PRICE_RANGE({
      products:data,
    }))
  }, [dispatch, data])

  return (
    <main className="min-h-screen flex">
     
        <aside className="w-56 flex-none">
          {loading ? null : <ProductFilter />}
        </aside>
        <div>
          {loading ? <Loader /> : (
            <ProductList products={products} />
          )}
        </div>

      
    </main>
  )
}
