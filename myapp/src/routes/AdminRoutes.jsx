import React from 'react'
import AdminIndex from '../pages/Admin/AdminIndex/AdminIndex'
import AdminLayout from '../layout/AdminLayout'
import { Route, Routes } from 'react-router-dom'
import Categories from '../pages/Admin/Categories/Categories'
import Products from '../pages/Admin/Products/Products/Products'
import ProductsAdd from '../pages/Admin/Products/ProductsAdd/ProductsAdd'
import { ProductContextProvider } from '../context/ProductContext'
import { CategoryContextProvider } from '../context/CategoryContext'

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path='/manage/index' element={<CategoryContextProvider><ProductContextProvider><AdminIndex /></ProductContextProvider></CategoryContextProvider>} />
        <Route path='/manage/products/categories' element={<CategoryContextProvider><Categories /></CategoryContextProvider>} />
        <Route path='/manage/products' element={<ProductContextProvider><Products /></ProductContextProvider>} />
        <Route path='/manage/products/add' element={<CategoryContextProvider><ProductsAdd /></CategoryContextProvider>} />
      </Routes>

    </AdminLayout >
  )
}

export default AdminRoutes