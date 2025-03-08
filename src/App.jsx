import React from 'react';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, Bounce} from 'react-toastify'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <main className='bg-gray-100 p-6'>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/addproduct' element={<AddProduct/>}/>
                <Route path='/editproduct/:id' element={<EditProduct/>}/>
            </Routes>
        </main>
        <Footer/>
        <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} 
                       closeOnClick={true} transition={Bounce} theme="dark"/>
      </BrowserRouter>
    </>
  )
}
export default App

