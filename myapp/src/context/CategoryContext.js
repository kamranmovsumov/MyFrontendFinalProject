import axios from "axios";
import { createContext, useEffect, useState } from "react";
import apiUrl from "../utils/api";

const CategoryContext = createContext()

const CategoryContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await axios.get(`${apiUrl.baseApiUrl}/categories`)
                setCategories(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        getCategories()
    }, []);

    return (
        <CategoryContext.Provider value={{ categories }}>
            {children}
        </CategoryContext.Provider>
    )
}


export { CategoryContext, CategoryContextProvider };