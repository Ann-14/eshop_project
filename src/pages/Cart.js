import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCartItems, selectCartTotalPrice, selectCartTotalQuantity } from '../redux/slice/cartSlice'
import {FaTrashAlt} from 'react-icons/fa'

export const Cart = () => {
const cartItems = useSelector(selectCartItems)
const cartTotalQuantity = useSelector(selectCartTotalQuantity)
const cartTotalPrice = useSelector(selectCartTotalPrice)

  return (
   <section>
    <div className=" bg-gray-100 pt-20">
    <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
    <div className="rounded-lg md:w-2/3">
    
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
  <>
  <div key={id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
 
          <img src={imageURL} alt={name} className="w-full rounded-lg sm:w-40" />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">{name}</h2>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={cartQuantity} min="1" />
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm">{(price * cartQuantity).toFixed(2)}€</p>
               <FaTrashAlt className='text-red-400'></FaTrashAlt>
              </div>
            </div>
          </div>
        </div>
        
        
        



  
  </>
)


})}

</>





) }










{/* <!-- Sub total --> */}
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">{`${cartTotalPrice.toFixed(2)}`}</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">{`item(s) `}</p>
          <p class="text-gray-700">{cartTotalQuantity}</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">{cartTotalQuantity}€</p>
           
          </div>
        </div>
        <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div>

</div>
</div>
</div>

</section> 















)
}