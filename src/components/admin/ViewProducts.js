import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { db, storage } from "../../firebase/config"
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { deleteObject, ref } from "firebase/storage"
import { Confirm } from "notiflix"
import { useDispatch, useSelector } from "react-redux"
import { selectProduct, storeProducts } from "../../redux/slice/productSlice"
import { useFetchCollection } from "../../hooks/useFetchCollection"
import { Loader } from "../Loader"


export const ViewProducts = () => {
  const { data, loading } = useFetchCollection('products')
  const products = useSelector(selectProduct)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //we pass data coming from customHook to redux
  useEffect(() => {
    dispatch(
      storeProducts({
        products: data
      }),
    )
  }, [dispatch,data])

  const confirmDelete = (id, imageURL) => {
    Confirm.show(
      'Delete Product',
      'Do you want to delete this product?',
      'Delete',
      'Cancel',
      () => {
        deleteProduct(id, imageURL)
        navigate('/admin/products')
      },
      () => {
        navigate('/admin/products')
        console.log('delete has been canceled')
      },
      {
      },
    );
  }

  const deleteProduct = async (id, imageURL) => {
    try {
      await deleteDoc(doc(db, 'products', id))
      const storageRef = ref(storage, imageURL)
      await deleteObject(storageRef)
      toast.success('product deleted successfully')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>
      {loading && <Loader />}
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <h2>All Products</h2>
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          <div className="col-span-12">
            <div className="overflow-auto lg:overflow-visible ">
              <table className="table text-gray-400 border-separate space-y-6 text-sm">
                <thead className="bg-gray-800 text-gray-500">
                  <tr>
                    <th className="p-3">Serial</th>
                    <th className="p-3">Name</th>
                    <th className="p-3 text-left">Category</th>
                    <th className="p-3 text-left">Price</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => {
                    const { id, name, price, imageURL, category } = product
                    return (

                      <tr className="bg-gray-800" key={id}>
                        <td>{index + 1}</td>
                        <td className="p-3">
                          <div className="flex align-items-center">
                            <img className="rounded-full h-12 w-12  object-cover" src={imageURL} alt={name} />
                            <div className="ml-3">
                              <div className="">{name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">
                          {category}
                        </td>
                        <td className="p-3 font-bold">
                          {`${price}€`}
                        </td>
                        <td className="p-3">
                          <span className="bg-green-400 text-gray-50 rounded-md px-2">available</span>
                        </td>
                        <td className="p-3 ">
                          <Link to={`/admin/add-product/${id}`} className="text-gray-400 hover:text-gray-100 mr-2"><FaEdit /></Link>
                          <Link to='/admin/product' className="text-gray-400 hover:text-gray-100 mr-2"><FaTrashAlt onClick={() => confirmDelete(id, imageURL)} /></Link>
                        </td>
                      </tr>

                    )
                  })}

                </tbody>
              </table>
            </div>
          </div>

        )}
      </div>

    </>
  )
}
