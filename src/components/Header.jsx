import React from "react";

function Header(){
    return(
       <header className="text-center bg-indigo-600 text-white py-8">
           <h1 className="text-5xl font-semibold mb-4">Inventory Management</h1>
           <p className="text-xl">You can manage stock and prices of product here!</p>
       </header>
    )
}
export default Header