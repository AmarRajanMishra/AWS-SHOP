import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UpdateProduct() {
    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [product, setProduct] = useState('')


    const getProduct = async () =>{
      try {
          const {data} = await axios.get(`http://localhost:8080/api/v1/products/${id}`)
          console.log(data.product)
          setProduct(data.product)
      } catch (error) {
          console.log(error)
      }
  }

    const updateProduct = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:8080/api/v1/products/${id}`, {
            title : title,
            category : category,
            price : price,
            description : description,
            image : image
        }, {
            headers : {
                "Content-Type" : "application/json"
            }
        })
        toast.success('Product created successfully')
        console.log(res)
        } catch (error) {
            console.log(error)
            toast.error('Something went Wrong')
        }
        
    }

    useEffect(()=>{
      getProduct()
    },[])
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Add Product To The Database
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={updateProduct}>
          <div>
            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
              Product Title
            </label>
            <div className="mt-2">
              <input
              onChange={(e)=>setTitle(e.target.value)}
              value={product.title}
                id="title"
                name="title"
                type="text"
                autoComplete="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
              Product Category
            </label>
            <div className="mt-2">
              <input
              onChange={(e)=>setCategory(e.target.value)}
                id="category"
                name="category"
                type="text"
                autoComplete="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
              Product Price
            </label>
            <div className="mt-2">
              <input
              onChange={(e)=>setPrice(e.target.value)}
                id="price"
                name="price"
                type="number"
                autoComplete="number"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
              Product Description
            </label>
            <div className="mt-2">
              <input
              onChange={(e)=>setDescription(e.target.value)}
                id="description"
                name="description"
                type="text"
                autoComplete="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
              Product Image
            </label>
            <div className="mt-2">
              <input
              onChange={(e)=>setImage(e.target.value)}
                id="image"
                name="image"
                type="text"
                autoComplete="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default UpdateProduct