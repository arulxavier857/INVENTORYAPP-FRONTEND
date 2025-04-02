import React, { useState } from "react";
import axios from "axios";
import {toast} from 'react-toastify'
import {Link} from 'react-router-dom'

function AddProduct() {

    const [name,setName] = useState('')
    const [quantity,setQuantity] = useState(0)
    const [price, setPrice] = useState(0)

    const saveProduct = async (e)=>{
        e.preventDefault()
        try{
            const response = await axios.post('https://inventoryapp-backend-ykrs.onrender.com/addProduct',{name,quantity,price})
            toast.success(response.data.message)
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className="max-w-md mx-auto mt-12 pb-12">         
             <h1 className="text-blue-600 text-2xl mb-4 text-center">Add New Products</h1>
             <Link to={'/'} className="mb-4 text-xl text-blue-600 underline underline-offset-4 cursor-pointer">View Products</Link>
             <form onSubmit={saveProduct} className="w-full flex flex-col mt-4">
                 <input type="text" placeholder="Enter Product Name" required
                     className="border border-gray-400 mb-4 rounded px-3 py-2 text-lg"   
                     onChange={(e)=>setName(e.target.value)}
                 />
                  <input type="number" placeholder="No of Items" required
                     className="border border-gray-400 mb-4 rounded px-3 py-2 text-lg"   
                     onChange={(e)=>setQuantity(e.target.value)}
                />
                  <input type="number" placeholder="Price" required
                     className="border border-gray-400 mb-4 rounded px-3 py-2 text-lg"   
                     onChange={(e)=>setPrice(e.target.value)}
                 />
                 <div className="text-center">
                    <button className="bg-blue-600 text-white w-[50%] px-3 py-2 rounded-2xl">
                        Save Product
                    </button>
                 </div> 
             </form>
        </div>
    )
}
export default AddProduct
