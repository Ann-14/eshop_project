import { Link } from "react-router-dom"

export const ProductItem = ({product,id,name,price,description,imageURL}) => {
  return (
   <>
   <Link to={`/product-details/${id}`}>
   <div>
    <img src={imageURL} alt={name} />
   </div>
   </Link>
   <div>
    <div>
      <p>{`${price}€`}</p>
      <h4>{name}</h4>
    </div>
    <button>Add to Cart</button>
   </div>
   </>
  )
}
