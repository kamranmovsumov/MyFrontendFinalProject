import React, { useContext, useEffect, useState } from 'react'
import './details.css'
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

    console.log(item);


    /*     const galleryImages = item.images.map((imageUrl, index) => ({
            original: imageUrl,
            thumbnail: index === item.images.length - 1 ? imageUrl : undefined
        })); */


    return (
        <div>
            {
                item ?
                    <div className="container">
                        <div className="card mt-4">
                            <div className="card-body">
                                <h3 className="card-title">{item.title}</h3>
                                <h6 className="card-subtitle">Category: {item.category}</h6>
                                <div className="row">
                                    {/* <div className="col-lg-3 col-md-5 col-sm-6">
                                        <div className="item-image text-center">
                                            <img src={item.images[0]} alt='...' />
                                        </div>
                                    </div> */}
                                    <div className="">
                                        <ReactImageGallery
                                            showBullets={false}
                                            showFullscreenButton={false}
                                            showPlayButton={false}
                                            items={
                                                item.images.map((imageUrl, index) => ({
                                                    original: imageUrl,
                                                    thumbnail: imageUrl
                                                }))
                                            }
                                        />
                                    </div>
                                    <div className="mt-1">
                                        <Rater
                                            style={{ fontSize: "30px" }}
                                            total={5}
                                            interactive={false}
                                            rating={item.rating}
                                        />
                                    </div>
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
                                        Category: {item.category}
                                    </p>
                                    <p>
                                        Price: {item.price} ₼
                                    </p>
                                    <p>
                                        Description: {item.description}
                                    </p>
                                    <div>
                                        <button className="btn btn-primary" onClick={() => addToCart(item)}>
                                            <BiShoppingBag className="mx-2" />Add to cart
                                        </button>
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


/* import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../../../utils/api'
import { BiShoppingBag } from "react-icons/bi";
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

import './details.css'
import Spinner from '../../../components/dynamic/Loader/Spinner';

const ProductDetails = () => {

    const { id } = useParams()

    const [item, setItem] = useState()

    useEffect(() => {
        const getItem = async () => {
            try {
                const response = await axios.get(`${apiUrl.baseApiUrl}/${id}`)
                if (response) {
                    setItem(response.data.products)
                }
            } catch (error) {
                console.error(error)
            }
        }

        getItem()
    }, [id])

    console.log(item);

    const galleryImages = item.images.map((imageUrl, index) => ({
        original: imageUrl,
        thumbnail: index === item.images.length - 1 ? imageUrl : undefined
    }));


    return (
        <>
            {
                item ?
                    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
                        <div className="container mx-auto px-4">
                            <ReactImageGallery
                                showBullets={false}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                items={galleryImages}
                            />
                        </div>
                        <div className="mx-auto px-5 lg:px-5">
                            <h2 className="pt-3 text-2xl font-bold lg:pt-0">
                                {item.title}
                            </h2>
                            <div className="mt-1">
                                <div className="flex items-center">
                                    <Rater
                                        style={{ fontSize: "20px" }}
                                        total={5}
                                        interactive={false}
                                        rating={item.rating}
                                    />
                                </div>
                            </div>
                            <p className="mt-5 font-bold">
                                Availability:{" "}
                                {item.availability ? (
                                    <span className="text-green-600">In Stock </span>
                                ) : (
                                    <span className="text-red-600">Expired</span>
                                )}
                            </p>
                            <p className="font-bold">
                                Brand: <span className="font-normal">{item.brand}</span>
                            </p>
                            <p className="font-bold">
                                Cathegory:{" "}
                                <span className="font-normal">{item.category}</span>
                            </p>
                            <p className="mt-4 text-4xl font-bold text-violet-900">
                                ${item.price}
                            </p>
                            <p className="pt-5 text-sm leading-5 text-gray-500">
                                {item.description}
                            </p>
                            <div className="mt-6">
                                <p className="pb-2 text-xs text-gray-500">Quantity</p>
                                <div className="flex">
                                    <button>−</button>
                                    <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                                        1
                                    </div>
                                    <button>+</button>
                                </div>
                            </div>
                            <div className="mt-7 flex flex-row items-center gap-6">
                                <button className="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800">
                                    <BiShoppingBag className="mx-2" />
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </section> : <Spinner />
            }
        </>
    );
};

export default ProductDetails; */