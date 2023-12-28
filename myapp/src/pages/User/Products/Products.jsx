import React, { useContext, useState } from 'react'
import './product.css'
import ProductCard from '../../../components/dynamic/Card/ProductCard'
import Spinner from '../../../components/dynamic/Loader/Spinner'
import Categories from '../../../components/dynamic/Categories/Categories'
import { ProductContext } from '../../../context/ProductContext'

const Products = () => {
  const { products } = useContext(ProductContext)
  const [query, setQuery] = useState("");


  if (products.length === 0) {
    return <Spinner />
  }

  return (
    <div className='container my-4'>
      <div className="row my-1">
        <div className='col-lg-9'>
          <input className="form-control" name='search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter product name" />
        </div>
        <div className="col-lg-3">
          <Categories />
        </div>
      </div>

      <div className='row'>
        {
          products.length && products.filter((input) => {
            if (query === "") {
              return input
            }
            return input.title.toLowerCase().includes(query.toLowerCase())
          }).map(item => {
            return (
              <ProductCard data={item} key={item.id} />
            )
          })
        }
      </div>

    </div>
  )
}

export default Products