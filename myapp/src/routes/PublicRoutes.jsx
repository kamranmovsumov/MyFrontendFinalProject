import React from 'react'
import Layout from '../layout/Layout'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/User/Index/HomePage'
import Products from '../pages/User/Products/Products'
import ProductDetails from '../pages/User/ProductDetails/ProductDetails'
import { ProductContextProvider } from '../context/ProductContext'
import { CategoryContextProvider } from '../context/CategoryContext'
import Cart from '../pages/User/Cart/Cart'
import Login from '../pages/User/Login/Login'
import Register from '../pages/User/Register/Register'
import Contact from '../pages/User/Contact/Contact'

const PublicRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/products' element={<CategoryContextProvider><ProductContextProvider><Products /></ProductContextProvider></CategoryContextProvider>} />
                <Route path='/products/:id' element={<ProductDetails />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/shopping-cart' element={<Cart />} />
            </Routes>
        </Layout>
    )
}

export default PublicRoutes