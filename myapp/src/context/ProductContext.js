import axios from "axios";
import { createContext, useEffect, useState } from "react";
import apiUrl from "../utils/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(`${apiUrl.baseApiUrl}`)
                setProducts(response.data.products)
            } catch (error) {
                console.error(error)
            }
        }
        getProducts()
    }, [])

    const FilterProductByCategory = async (categoryName) => {
        try {
            if (categoryName === '' || categoryName === 'all') {
                const response = await axios.get(`${apiUrl.baseApiUrl}`)
                if (response) {
                    setProducts(response.data.products)
                }
            }
            else {
                const response = await axios.get(`${apiUrl.baseApiUrl}/category/${categoryName}`)
                if (response) {
                    setProducts(response.data.products)
                }
            }
        } catch (error) {
            toast.error('Error occured while filter products')
        }
    }

    const DeleteProductById = async (id) => {
        try {
            const response = await axios.delete(`${apiUrl.baseApiUrl}/${id}`)
            if (response) {
                toast.success('Product deleted successfully')
            }
        } catch (error) {
            toast.error('Error occured while delete category')
        }
    }

    const AddProductByName = async (name) => {
        try {
            const response = await axios.post(`${apiUrl.baseApiUrl}/add`)
            if (response) {
                toast.success('Product added successfully')
                navigate('/manage/products')
            }
        } catch (error) {
            toast.error('Error occured while delete category')
        }
    }

    return (
        <ProductContext.Provider value={{ products, DeleteProductById, AddProductByName, FilterProductByCategory }}>
            {children}
        </ProductContext.Provider>
    )
}


export { ProductContext, ProductContextProvider };