import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { ADD_TO_CART, CALCULATE_TOTAL_ITEMS } from "../../redux/slice/cartSlice"


export const ProductItem = ({ product, id, name, price, description, imageURL }) => {
  // const dispatch = useDispatch()

  // const addToCart = (product) => {
  //   dispatch(ADD_TO_CART(product))
  //   dispatch(CALCULATE_TOTAL_ITEMS())
  // }

  return (
    <>
      <div data-theme='light' className="card w-96 bg-slate-200 shadow-xl flex justify-center items-center ">
        <Link to={`/product-details/${id}`}>
          <figure><img src={imageURL} alt={name} className='h-80 w-80 object-cover rounded my-6' /></figure>
        </Link>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link to={`/product-details/${id}`}>
              <button className="btn btn-primary">See More</button>
            </Link>
          </div>
        </div>
        </div>
      
    </>
  )
}
