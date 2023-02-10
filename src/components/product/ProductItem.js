import { Link } from "react-router-dom"

export const ProductItem = ({product,id,name,price,description,imageURL}) => {
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
    <button className="flex">Add to Cart</button>
    </div>
 
    </section>
   
  </>
  )
}
