import React, { useState } from 'react'
import './add.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../../../utils/api'
import toast from 'react-hot-toast'
import { FormProvider } from 'react-hook-form'

const ProductsAdd = () => {
  const navigate = useNavigate()

  const [product, setProduct] = useState({
    productName: ''
  })

  const addHandler = async () => {
    try {
      const response = axios.post(`${apiUrl.baseApiUrl}/add`, product)
      if (response) {
        toast.success('Product added successfully')
        navigate('/manage/products')
      }
      else{
        toast.error('Product zirt pirt')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container my-4">
      <FormProvider>
      <form noValidate>

      <div className='input-product'>
        <div className="row">
          <div className="col-lg-12 mb-2">
            <input onChange={(e) => setProduct({ ...product, productName: e.target.value })} className='form-control' type="text" required name="productName" placeholder='Enter product name' />
          </div>
        </div>
        <div className='col-lg-12 mb-2'>
          <button onClick={addHandler} className='btn btn-success form-control'>Create product</button>
        </div>
      </div>
      </form>

      </FormProvider>

    </div>
  )
}

export default ProductsAdd