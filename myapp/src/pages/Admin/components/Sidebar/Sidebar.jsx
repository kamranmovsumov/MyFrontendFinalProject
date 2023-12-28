import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome, AiFillSkin, AiFillGold } from "react-icons/ai";
import './sidebar.css'


const Sidebar = () => {
  return (
    <aside>
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
    </aside>

    /*     <div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
          <div class="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <Link to='/manage/index'><AiFillHome /> Home</Link>
                </li>
                <li class="nav-item">
                  <Link to='/manage/products/categories'><AiFillGold /> Categories</Link>
                </li>
                <li class="nav-item">
                  <Link to='/manage/products'><AiFillSkin /> Products</Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */
  )
}

export default Sidebar