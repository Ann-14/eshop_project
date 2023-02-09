import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "../../firebase/config"
import { Loader } from "../Loader"


export const ProductDetails = () => {
const {id }= useParams()
const [product, setProduct] = useState(null)

useEffect(() => {
  getProduct()

  
}, [])

const getProduct = async () =>{

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
      <div>
      <h2>Product Details</h2>
      <div>
        <Link to='/#products'>&larr; Back to products</Link>
      </div>
{product === null ? (
<Loader/>
) : (
  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img className="p-8 rounded-t-lg" src={product.imageURL} alt={product.name} />
    <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
            <p>{`${product.price}€`}</p>
            <p>{product.description}</p>
      
      <div className="flex">
        <button>-</button>
        <p>
          <b>1</b>
        </p>
        <button>+</button>
      </div>

        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
        </div>
    </div>
</div>

) }



</div>
</section>
    </>
  )
}


