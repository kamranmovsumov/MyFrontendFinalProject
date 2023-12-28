import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import './cart.css'
import { PiSmileySad } from "react-icons/pi";

const Cart = () => {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal, getCartLength } = useContext(CartContext)

    return (
        <>
            {
                cartItems.length > 0 ? (
                    <div id="mainTable" className="container mt-3">
                        <table className="table table-hover table-bordered table-striped bg-transparent">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th className="col-3">Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>
                                            <img src={item.thumbnail} alt={item.title} />
                                        </td>
                                        <td>{item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title}</td>
                                        <td>{(item.price * item.quantity).toFixed(2)} ₼</td>
                                        <td className='d-flex justify-content-center'>
                                            <button className='btn btn-danger mx-2' onClick={() => { removeFromCart(item) }}>-</button>
                                            <p className='m-auto'>{item.quantity}</p>
                                            <button className='btn btn-success mx-2' onClick={() => { addToCart(item) }}>+</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="card mb-5 bg-transparent">
                            <div className="card-body p-4">

                                <div className="d-flex  justify-content-between float-end">
                                    <div>
                                        <p className=" mb-0 d-flex align-items-center">
                                            Total Count: <span className="ms-2">{getCartLength()}</span>
                                        </p>
                                        <p className="mb-0 d-flex align-items-center">
                                            Total Price: <span className="ms-3">{getCartTotal()}</span> ₼
                                        </p>
                                    </div>
                                    <button className="btn btn-warning" onClick={() => { clearCart() }}> Delete all items from cart </button>
                                </div>

                            </div>
                        </div>

                    </div>
                ) : (
                    <div className="text-center pt-5 pb-5">
                        <PiSmileySad size={200} />
                        <h2 className="mt-4">Your shopping cart is empty!</h2>
                        <Link to={'/products'} className="btn btn-primary mb-2 me-2">Continue Shopping</Link>
                    </div>
                )
            }
        </>
    )
}

export default Cart