import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {toast} from 'react-toastify'

function EditProduct(){
     
     const {id} = useParams()
     const [name,setName] = useState('')
     const [quantity, setQuantity] = useState(0)
     const [price,setPrice] = useState(0)

     useEffect(()=>{
        findProduct()
     },[])

     const findProduct = async ()=>{
        try{
            const response = await axios.get(`https://inventoryapp-frontend-1.onrender.com/findProduct/${id}`)
            setName(response.data.name)
            setQuantity(response.data.quantity)
            setPrice(response.data.price)
        }catch(error){
            console.log(error)
        }
     }

    const updateProduct = async (e)=>{
        e.preventDefault()
        try{
            const response = await axios.put(`https://inventoryapp-frontend-1.onrender.com/editProduct/${id}`,{name,quantity,price})
            toast.success(response.data.message)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div className="max-w-md mx-auto mt-12 pb-12">         
        <h1 className="text-blue-600 text-2xl mb-4 text-center">Edit Product Details</h1>
        <Link to={'/'} className="mb-4 text-xl text-blue-600 underline underline-offset-4 cursor-pointer">View Products</Link>
        <form onSubmit={updateProduct} className="w-full flex flex-col mt-4">
            <input type="text" placeholder="Enter Product Name" required
                className="border border-gray-400 mb-4 rounded px-3 py-2 text-lg"   
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
             <input type="number" placeholder="No of Items" required
                className="border border-gray-400 mb-4 rounded px-3 py-2 text-lg"   
                value={quantity}
                onChange={(e)=>setQuantity(e.target.value)}
           />
             <input type="number" placeholder="Price" required
                className="border border-gray-400 mb-4 rounded px-3 py-2 text-lg" 
                value={price}  
                onChange={(e)=>setPrice(e.target.value)}
            />
            <div className="text-center">
               <button className="bg-blue-600 text-white w-[50%] px-3 py-2 rounded-2xl">
                   Update Product
               </button>
            </div> 
        </form>
        
   </div>
    )
}
export default EditProduct