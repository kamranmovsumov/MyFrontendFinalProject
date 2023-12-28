import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../../components/dynamic/Loader/Spinner'
import axios from 'axios'
import apiUrl from '../../../utils/api'
import Rater from "react-rater"
import "react-rater/lib/react-rater.css"
import ReactImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { BiShoppingBag } from "react-icons/bi"
import { CartContext } from '../../../context/CartContext'
import './details.css'

const ProductDetails = () => {
    const { id } = useParams()

    const [item, setItem] = useState()

    const { addToCart } = useContext(CartContext)

    useEffect(() => {
        const getItem = async () => {
            try {
                const response = await axios.get(`${apiUrl.baseApiUrl}/${id}`)
                if (response) {
                    setItem(response.data)
                }
            } catch (error) {
                console.error(error)
            }
        }

        getItem()
    }, [id])

    return (
        <div>
            {
                item ?
                    <div className="container">
                        <div className="card mt-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <ReactImageGallery
                                            showBullets={false}
                                            showFullscreenButton={false}
                                            showPlayButton={false}
                                            items={
                                                item.images.map((imageUrl) => ({
                                                    original: imageUrl,
                                                    thumbnail: imageUrl
                                                }))
                                            }
                                        />
                                    </div>
                                    <div className='col-lg-5'>
                                        <h3 className="card-title">{item.title}</h3>
                                        <h6 className="card-subtitle">Category: {item.category}</h6>
                                        <Rater
                                            style={{ fontSize: "30px" }}
                                            total={5}
                                            interactive={false}
                                            rating={item.rating}
                                        />
                                        <p>
                                            Availability:
                                            {item.stock >= 1 ? (
                                                <span className="text-success"> In Stock </span>
                                            ) : (
                                                <span className="text-danger"> Expired</span>
                                            )}
                                        </p>
                                        <p>
                                            Brand: {item.brand}
                                        </p>
                                        <p>
                                            Price: {item.price} ₼
                                        </p>
                                        <p>
                                            Description: {item.description}
                                        </p>
                                        <div>
                                            <button className="btn btn-primary mt-4" onClick={() => addToCart(item)}>
                                                <BiShoppingBag className="mx-2" />Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : <Spinner />
            }
        </div>
    )
}

export default ProductDetails