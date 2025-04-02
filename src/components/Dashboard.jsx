import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import {toast} from 'react-toastify'

function Dashboard(){

    const [products,setProducts] = useState([])

    useEffect(()=>{
        viewProducts()
    },[])

    const viewProducts = async ()=>{
        try{
            const response = await axios.get("https://inventoryapp-backend-ykrs.onrender.com/viewProducts")
            setProducts(response.data)
        }catch(error){
            console.log(error)
        }
    }

    const deleteProduct = async (id)=>{
        const isConfirmed = confirm("Do you want to delete?")
        if(isConfirmed){
            try{
                const response = await axios.delete(`https://inventoryapp-backend-ykrs.onrender.com/deleteProduct/${id}`)
                toast.success(response.data.message)
                viewProducts()
            }catch(error){
                console.log(error)
            }
        }
    }
    

    return(
        <div>
            <h1 className="text-center font-bold text-2xl text-blue-500">
                Stock Details
            </h1>
            <table className="border border-gray-400 w-[80%] mx-auto mt-8 text-lg">
                <caption className="text-left mb-4">
                    <Link to={'/addproduct'} className="text-blue-700 text-xl underline underline-offset-4 cursor-pointer">Add New Product</Link>
                </caption>
                <thead>
                    <tr className="bg-green-200 border border-gray-400">
                        <th className="border border-gray-400 px-3 py-2">Sl.No</th>
                        <th className="border border-gray-400 px-3 py-2">Name</th>
                        <th className="border border-gray-400 px-3 py-2">Quantity</th>
                        <th className="border border-gray-400 px-3 py-2">Price</th>
                        <th colSpan={2} className="border border-gray-400 px-3 py-3">Actions</th>
                    </tr>  
                </thead>
                <tbody>
                     {products.map((item,index)=>{
                         return(
                            <tr key={index} className="border border-gray-400">
                                <td className="border border-gray-400 px-3 py-2">{index+1}</td>
                                <td className="border border-gray-400 px-3 py-2">{item.name}</td>
                                <td className="border border-gray-400 px-3 py-2">{item.quantity}</td>
                                <td className="border border-gray-400 px-3 py-2">{item.price}</td>
                                <td className="border border-gray-400 px-3 py-2">
                                    <Link to={`/editproduct/${item._id}`} className="text-blue-800 underline underline-offset-4 cursor-pointer">
                                        Edit
                                    </Link>
                                </td>
                                <td className="border border-gray-400 px-3 py-3">
                                    <button onClick={()=>deleteProduct(item._id)} className="text-red-500 underline underline-offset-4 cursor-pointer">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                         )
                     })}
                </tbody>
            </table>

        </div>
    )
}
export default Dashboard
