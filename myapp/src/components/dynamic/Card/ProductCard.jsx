import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import { useContext } from 'react'
import { FaCartPlus } from "react-icons/fa6";

const ProductCard = (props) => {
    const { id, title, price, category, thumbnail } = props.data

    const { addToCart } = useContext(CartContext)

    return (
            <div className='col-lg-3 col-md-4 col-sm-6 col-12 g-3'>
                <div className="card h-100">
                    <div className="card-image">
                        <Link to={`/products/${id}`} className='form-control'>
                            <img src={thumbnail} className="card-img-top" alt={title} />
                        </Link>
                    </div>
                    <div className="card-body">
                        <p>Category: {category}</p>
                        <h5>{title.length > 40 ? title.slice(0, 40) + "..." : title}</h5>
                        <p>{price} ₼</p>

                        <div className='mt-2'>
                            <button className='btn btn-primary form-control mt-1' onClick={() => addToCart(props.data)}>
                                <FaCartPlus /> Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ProductCard