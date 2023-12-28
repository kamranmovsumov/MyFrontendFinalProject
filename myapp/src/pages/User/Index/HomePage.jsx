import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="container m-auto text-center mt-5">
        <h1 className="display-1 text-bold">Welcome</h1>
        <Link className="button button-brand btn-lg mb-5 mb-lg-2" to="/products">Let's shopping</Link>
    </div>
  )
}

export default HomePage