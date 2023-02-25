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
  
  return (
    <>
      <section>
          <div className="btn btn-sm ">
            <Link to='/productsPage'>&larr; Back to products</Link>
          </div>
          {product === null ? (
            <Loader />
          ) : (
            <section className="body-font overflow-hidden ">
              <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={product.imageURL} alt={product.name} />
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font tracking-widest">The Colorsite Photography</h2>
                    <h1 className=" text-3xl title-font font-medium mb-1">{product.name}</h1>
                    <div className="flex mb-4">
                      <span className="flex items-center">
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 text-primary" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 text-primary"viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 text-primary"viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 text-primary" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 text-primary"viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span className="ml-3">4 Reviews</span>
                      </span>
                      <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                        <a className="text-gray-500">
                          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                    <p className="leading-relaxed">{product.description}</p>
                    {productInCart < 0 ? null : (
                      <>
                        <div className="flex items-center border-gray-100  mt-4">
                          <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3 duration-100 hover:bg-gray-500 " onClick={() => decreaseCart(product)}> - </span>
                          <p className="flex justify-center items-center h-8 w-8 border font-bold text-center  text-xs outline-none" type="number">{cart?.cartQuantity} </p>
                          <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-gray-500 " onClick={() => addToCart(product)}> + </span>
                        </div>
                      </>
                    )}
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                    </div>
                    <div className="flex">
                      <span className="title-font font-medium text-2xl ">{`${product.price}€`}</span>
                      <button className="flex ml-auto btn btn-primary rounded" onClick={() => addToCart(product)}>Add to Cart</button>
                      <button className="mt-1 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
      </section>
    </>
  )
}


