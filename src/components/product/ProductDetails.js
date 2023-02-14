import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "../../firebase/config"
import { ADD_TO_CART, CALCULATE_TOTAL_ITEMS, DECREASE_CART, selectCartItems } from "../../redux/slice/cartSlice"
import { Loader } from "../Loader"


export const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const cart = cartItems.find((product) => product.id === id)

  const productInCart = cartItems.findIndex((product) => {
    return product.id === id
  })

  useEffect(() => {
    getProduct()
  }, [])

  const addToCart = (product) => {
    dispatch(ADD_TO_CART(product))
    dispatch(CALCULATE_TOTAL_ITEMS())

  }
  const decreaseCart = (product) => {
    dispatch(DECREASE_CART(product))
    dispatch(CALCULATE_TOTAL_ITEMS())

  }

  const getProduct = async () => {

    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      const obj = {
        id: id,
        ...docSnap.data()
      }
      setProduct(obj)
    } else {
      toast.error('Product not found')
    }
  }
  console.log(product)
  return (
    <>
      <section>
        <div>
          <h2>Product Details</h2>
          <div>
            <Link to='/home'>&larr; Back to products</Link>
          </div>
          {product === null ? (
            <Loader />
          ) : (
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="p-8 rounded-t-lg" src={product.imageURL} alt={product.name} />
              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                <p>{product.description}</p>

                {productInCart < 0 ? null : (
                  <>
                    <div className="flex items-center border-gray-100 mt-4">
                      <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => decreaseCart(product)}> - </span>
                      <p className="flex justify-center items-center h-8 w-8 border bg-white text-center  text-xs outline-none" type="number">{cart?.cartQuantity} </p>
                      <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => addToCart(product)}> + </span>
                    </div>
                  </>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">{`${product.price}€`}</span>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => addToCart(product)}>Add to cart</button>
                </div>
              </div>
            </div>

          )}



        </div>
      </section>
    </>
  )
}


