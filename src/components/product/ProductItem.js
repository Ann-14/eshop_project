import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  ADD_TO_CART,
  CALCULATE_TOTAL_ITEMS,
} from "../../redux/slice/cartSlice";

export const ProductItem = ({
  product,
  id,
  name,
  price,
  description,
  imageURL,
  category,
}) => {
  // const dispatch = useDispatch()

  // const addToCart = (product) => {
  //   dispatch(ADD_TO_CART(product))
  //   dispatch(CALCULATE_TOTAL_ITEMS())
  // }

  return (
    <>
      <div className="card w-96 dark:shadow-gray-600 shadow-2xl flex justify-center items-center mb-8 ">
        <Link to={`/product-details/${id}`}>
          <figure>
            <img
              src={imageURL}
              alt={name}
              className="h-80 w-72 object-cover rounded mt-4"
            />
          </figure>
        </Link>
        <div className="card-body  ">
          <h2 className="card-title">{name}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sit.</p>
          <div className="card-actions justify-between">
            <h2 className="font-semibold text-lg">{price}€</h2>
            <Link to={`/product-details/${id}`}>
              <button className="btn-sm rounded-sm btn-primary">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
