import React, { useState } from 'react'

const categories = [
 { id:1,
  name:'category1'},
 { id:2,
  name:'category2'},
 { id:3,
  name:'category3'},
 { id:4,
  name:'category4'}
]

export const AddProduct = () => {
  const [product, setProduct] = useState({
    name:'',
    imageURL:'',
    price:'',
    description:'',
    category:'',
    
  });

const handleInputChange = (e) =>{
  const {name,value} = e.target
  setProduct({...product, [name]: value})
  
}
const handleImgChange = (e) =>{

}
const addProduct = (e) =>{
  e.preventDefault()
  console.log(product)
}
  return (
    <>
      <div className="space-y-6 bg-black px-4 py-5 sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
            <form onSubmit={addProduct}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                    {/* Product Name */}
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
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
                    <label className="block text-sm font-medium text-gray-700">Product image</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
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
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input type="file" accept='image/*' name="image"  className="sr-only" onChange={(e) => handleImgChange(e)}/>
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                      <input type='text'  name='imageURL' value={product.imageURL} disabled placeholder='Image url'/> 
                  </div>
                  {/* Product Price */}
                  <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700">
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
                      <label htmlFor="category"  className="block text-sm font-medium text-gray-700">
                        Product Categories:
                      </label>
                      <select required name='category' value={product.category} onChange={(e) => handleInputChange(e)} className='text-sm font-medium text-gray-700'>
                        <option value='' disabled>
                          --choose product category--
                        </option>
                        {categories.map((category) => {
                          return (
                            <option key={category.id} value={category.name} className= 'text-sm font-medium text-gray-700'>
                              {category.name}
                            </option>
                          )
                          })
                        }
                      </select>
                    </div>
                  {/* Product description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Product description
                    </label>
                    <div className="mt-1">
                      <textarea
                        name="description"
                        rows='5'
                        cols='10'
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
                    Save
                  </button>
                </div>
              </div>
            </form>
            </div>
            </div>
    </>
    
  )
}
