import React, { useContext } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../../context/ProductContext'
import { IoMdAdd } from 'react-icons/io';
import './products.css'

const Products = () => {
  const { products } = useContext(ProductContext)
  const { DeleteProductById } = useContext(ProductContext)

  if (products.length === 0) {
    return (
      <div className="alert alert-danger col-lg-6 col-12 mx-auto text-center" role="alert">
        Categories table is empty!
        <Link to='/manage/products/add' className='btn btn-success'><IoMdAdd /> Add product</Link>
      </div>
    )
  }

  return (
    <div>
      <div className="row head-info mt-3 mb-2">
        <div className='col-lg-10'>
          <h3>All products ({products.length})</h3>
        </div>
        <div className='col-lg-2'>
          <Link to='/manage/products/add' className='btn btn-success form-control'><IoMdAdd /> Add product</Link>
        </div>
      </div>
      <table className="table table-bordered table-striped table-hover">
        <thead className='table-primary'>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Category</th>
            <th>Title</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products && products.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <img className="rounded-circle" alt="avatar1" src={item.thumbnail} />
                  </td>
                  <td>{item.category}</td>
                  <td>{item.title}</td>
                  <td>{item.price} ₼</td>
                  <td>{item.brand}</td>
                  <td>{item.stock}</td>
                  <td>
                    <button onClick={() => DeleteProductById(item.id)} className='btn btn-sm btn-danger ms-2'><AiFillDelete /></button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Products