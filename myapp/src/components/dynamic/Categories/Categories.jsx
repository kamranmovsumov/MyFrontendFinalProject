import React, { useContext, useState } from 'react'
import { CategoryContext } from '../../../context/CategoryContext'
import { ProductContext } from '../../../context/ProductContext'

const Categories = () => {
    const { categories } = useContext(CategoryContext)
    const { FilterProductByCategory } = useContext(ProductContext)
    const [selectedCategory, setSelectedCategory] = useState('');


    const handleCategoryChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedCategory(selectedValue);
        FilterProductByCategory(selectedValue);
    };

    return (
        <select
            name='categories'
            className="form-select"
            onChange={handleCategoryChange}
            value={selectedCategory}
        >
            <option value='' disabled>Select category</option>
            <option value='all'>All products</option>
            {
                categories.map((category, index) => (
                    <option value={category} key={index}>
                        {category}
                    </option>
                ))
            }
        </select>
    )
}

export default Categories