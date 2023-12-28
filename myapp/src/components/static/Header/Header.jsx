import React from 'react'
import './header.css'
import { Link, NavLink } from 'react-router-dom'
import { GiClothes } from "react-icons/gi";
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
    const { getCartLength } = useContext(CartContext)

    return (
        <header className='p-3 text-bg-secondary'>
            <div className="container">
                <div className="row align-items-center d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-lg-3">
                        <div className="logo">
                            <Link to='/'><GiClothes /> Yevlakh Mall</Link>
                        </div>
                    </div>
                    <div className="col-lg-9 d-flex flex-wrap align-items-center justify-content-center justify-content-md-end py-2">
                        <nav>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/products'>Products</NavLink>
                            <NavLink to='/shopping-cart'><FaCartShopping /><sup className='m-1'>{getCartLength()}</sup></NavLink>
                        </nav>
                        <div class="text-end">
                            <button type="button" class="btn btn-primary me-2 mx-2"><Link to='/login'>Login</Link></button>
                            <button type="button" class="btn btn-primary"><Link to='/register'>Register</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header