import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ADD_TO_CART, CALCULATE_TOTAL, CALCULATE_TOTAL_ITEMS, DECREASE_CART, REMOVE_FROM_CART, SAVE_URL, selectCartItems, selectCartTotalPrice, selectCartTotalQuantity } from '../redux/slice/cartSlice'
import {FaTrashAlt} from 'react-icons/fa'
import { useEffect } from 'react'
import { selectIsLoggedIn } from '../redux/slice/authSlice'




export const Cart = () => {
const cartItems = useSelector(selectCartItems)
const cartTotalQuantity = useSelector(selectCartTotalQuantity)
const cartTotalPrice = useSelector(selectCartTotalPrice)
const isLoggedIn = useSelector(selectIsLoggedIn)
const dispatch = useDispatch()
const navigate = useNavigate()

const increaseCart = (product) =>{
  dispatch(ADD_TO_CART(product))
}

const decreaseCart = (product) =>{
dispatch(DECREASE_CART(product))
}

const removeProduct = (product) =>{
  dispatch(REMOVE_FROM_CART(product))
}

useEffect(() => {
 dispatch(CALCULATE_TOTAL()) 
 dispatch(CALCULATE_TOTAL_ITEMS())
 dispatch(SAVE_URL(''))

}, [dispatch,cartItems])

const url = window.location.href

const checkOut = () => {
if (isLoggedIn){
  navigate('/checkout-details')
}else{
  dispatch(SAVE_URL(url))
  navigate('/login')
}
}

  return (
   <section className='lg:flex lg:justify-center'>
    <div className=" pt-20">
    <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div className="mx-auto  justify-center px-6 flex md:space-x-6 xl:px-0">
    <div className="rounded-lg ">
    
{cartItems.lenght === 0 ? (
  <>
  <p>Your cart is currently empty</p>
  <div>
    <Link to='/#products'>Back to shopping</Link>
  </div>
  </>
): (
<>
{cartItems.map((product,index) =>{
const {id,name,price,imageURL,cartQuantity} = product
return(
  
 
  <div key={id} className="justify-between mb-6 rounded-lg  p-6 sm:flex sm:justify-start dark:shadow-gray-600 shadow-2xl ">
 
          <img src={imageURL} alt={name} className="w-full rounded-lg sm:w-40" />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between gap-4">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold">{name}</h2>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => decreaseCart(product)}> - </span>
                <p className="flex justify-center items-center h-8 w-8 border bg-white text-center  text-xs outline-none" type="number">{cartQuantity}  </p>
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => increaseCart(product)}> + </span>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm">{(price * cartQuantity).toFixed(2)}€</p>
               <FaTrashAlt className='text-red-400' onClick={() => removeProduct(product)} ></FaTrashAlt>
              </div>
            </div>
          </div>
        </div>
  
)
})}

</>
)}

{/* <!-- Sub total --> */}
      <div className="mt-10 mb-10  rounded-lg border p-6 shadow-2xl md:mt-0  ">
        <div className="mb-2 flex justify-between">
          <p>Subtotal</p>
          <p>{`${cartTotalPrice.toFixed(2)}`}</p>
        </div>
        <div className="flex justify-between">
          <p>{`item(s) `}</p>
          <p>{cartTotalQuantity}</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">{`${cartTotalPrice.toFixed(2)}`}€</p>
          </div>
        </div>
        <button className="btn btn-primary mt-6 w-full rounded-md py-1.5 font-medium" onClick={checkOut}>Check out</button>
      </div>

</div>
</div>
</div>

</section> 















)
}