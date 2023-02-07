import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db, storage } from "../../firebase/config";
import { selectProduct } from "../../redux/slice/productSlice";
import { Loader } from "../Loader";

const categories = [
  {
    id: 1,
    name: "category1",
  },
  {
    id: 2,
    name: "category2",
  },
  {
    id: 3,
    name: "category3",
  },
  {
    id: 4,
    name: "category4",
  },
];

const initialState = {
  name: "",
  imageURL: "",
  price: 0,
  description: "",
  category: "",
};
export const AddProduct = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const productsFromRedux = useSelector(selectProduct)
  
  const productToEdit = productsFromRedux.find((product) => product.id === id)
  console.log(productToEdit)

  const [product, setProduct] = useState(() => {
    const newState = detectForm(id,
      {...initialState},
      productToEdit
      )
      return newState
  });


 

function detectForm  (id, f1, f2){
if(id === 'ADD'){
  return f1
}else{
  return f2
}
}



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImgChange = (e) => {
    //we save the img we want to upload to a variable and refer to it with firebase's 'ref'
    const file = e.target.files[0];

    const storageRef = ref(storage, `theColorSite/${Date.now()}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProduct({ ...product, imageURL: downloadURL });
          toast.success("Image uploaded successfully.");
        });
      }
    );
  };

  const addProduct = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Add a new document with a generated id.
      const docRef = addDoc(collection(db, "products"), {
        name: product.name,
        imageURL: product.imageURL,
        price: Number(product.price),
        description: product.description,
        category: product.category,
        createdAt: JSON.stringify(Timestamp.now()),
      });
      setLoading(false);
      setUploadProgress(0);
      setProduct({ ...initialState });
      toast.success("Product uploaded successfully");
      navigate("/admin/products");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const editProduct = (e) =>{
    e.preventDefault()
    setLoading(true)
    //we need to delete the old img from firestore if we change it when editing
if(product.imageURL !== productToEdit.imageURL){
  const storageRef = ref(storage, productToEdit.imageURL)
   deleteObject(storageRef)
}

    try {
       setDoc(doc(db, "products", id), {
        name: product.name,
        imageURL: product.imageURL,
        price: Number(product.price),
        description: product.description,
        category: product.category,
        createdAt: productToEdit.createdAt,
        editedAt:Timestamp.now().toDate()
      });
      setLoading(false)
      toast.success('Product edited successfully')
      navigate('/admin/products')
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }
  return (
    <>
      {loading && <Loader />}
      <div className="space-y-6 bg-black px-4 py-5 sm:p-6">
        <h2 className="text-white">{detectForm(id,'Add New Product', 'Edit product')}</h2>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <form onSubmit={detectForm(id,addProduct,editProduct)}>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                {/* Product Name */}
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="productName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Product Name:
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="name"
                      value={product.name}
                      onChange={(e) => handleInputChange(e)}
                      className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Product name"
                    />
                  </div>
                </div>
                {/* Image Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Product image
                  </label>
                  <div className="mt-1 flex flex-col justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex flex-col text-sm text-gray-600">
                        <label htmlFor="image">
                          <span>Upload a file</span>
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          placeholder="Product Image"
                          className=""
                          name="image"
                          onChange={(e) => handleImgChange(e)}
                        />
                        {uploadProgress === 0 ? null : (
                          <div
                            className={`bg-blue-600 mt-2 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full w-[${uploadProgress}%]`}
                          >
                            {uploadProgress < 100
                              ? `Uploading ${uploadProgress}`
                              : `Upload Complete ${uploadProgress}%`}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {product.imageURL === "" ? null : (
                    <input
                      type="text"
                      name="imageURL"
                      value={product.imageURL}
                      disabled
                      placeholder="Image url"
                    />
                  )}
                </div>
                {/* Product Price */}
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Product Price:
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="number"
                      name="price"
                      onChange={(e) => handleInputChange(e)}
                      value={product.price}
                      className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Product price"
                    />
                  </div>
                </div>
                {/* Product categories */}
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Product Categories:
                  </label>
                  <select
                    required
                    name="category"
                    value={product.category}
                    onChange={(e) => handleInputChange(e)}
                    className="text-sm font-medium text-gray-700"
                  >
                    <option value="" disabled>
                      --choose product category--
                    </option>
                    {categories.map((category) => {
                      return (
                        <option
                          key={category.id}
                          value={category.name}
                          className="text-sm font-medium text-gray-700"
                        >
                          {category.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* Product description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Product description
                  </label>
                  <div className="mt-1">
                    <textarea
                      name="description"
                      rows="5"
                      cols="10"
                      required
                      onChange={(e) => handleInputChange(e)}
                      value={product.description}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="product description"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Brief description for your product.
                  </p>
                </div>
              </div>
              {/* button */}
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {detectForm(id, 'Add Product', 'Edit product')}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
