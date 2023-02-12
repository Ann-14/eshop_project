import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { ADD_TO_CART } from "../../redux/slice/cartSlice"

export const ProductItem = ({ product, id, name, price, description, imageURL }) => {
  const dispatch = useDispatch()

  const addToCart = (product) => {
dispatch(ADD_TO_CART(product))
  }




  return (
    <>

      <section className="flex flex-col">
        <div>
          <Link to={`/product-details/${id}`}>
            <img src={imageURL} alt={name} className='w-1/2 mx-auto' />
          </Link>
        </div>

        <div className=" mx-auto">
          <p>{`${price}€`}</p>
          <h4>{name}</h4>
          <button className="flex" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>

      </section>

    </>
  )
}
