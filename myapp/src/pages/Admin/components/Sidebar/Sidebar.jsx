import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome, AiFillSkin, AiFillGold } from "react-icons/ai";
import './sidebar.css'


const Sidebar = () => {
  return (
    /*     <aside>
          <ul>
            <li>
              <Link to='/manage/index'><AiFillHome /> Home</Link>
            </li>
            <li>
              <Link to='/manage/products/categories'><AiFillGold /> Categories</Link>
            </li>
            <li>
              <Link to='/manage/products'><AiFillSkin /> Products</Link>
            </li>
          </ul>
        </aside> */


    <aside className='min-vh-100'>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar">
        <Link to="/manage/index" className="d-flex align-items-center mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4">Admin Panel</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to='/manage/index'><AiFillHome /> Home</Link>
          </li>
          <li>
            <Link to='/manage/products/categories'><AiFillGold /> Categories</Link>
          </li>
          <li>
            <Link to='/manage/products'><AiFillSkin /> Products</Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}


export default Sidebar