import React, { useContext } from 'react'
import { CategoryContext } from '../../../context/CategoryContext'

const Categories = () => {
    const { categories } = useContext(CategoryContext)

    return (
        <div>

            <select name='categories' className="form-select my-2">
                <option value=''>Select category</option>
                {
                    categories && categories.map((category, index) => {
                        return (
                            <option value={category} key={index}>
                                {category}
                            </option>
                        )
                    })
                }
            </select>

        </div>
    )
}

export default Categories