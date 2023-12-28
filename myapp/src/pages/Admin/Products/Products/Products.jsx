import React, { useContext } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../../context/ProductContext'
import { IoMdAdd } from 'react-icons/io';
import DataTable from 'react-data-table-component';
import './products.css'

const Products = () => {
  const { products } = useContext(ProductContext)
  const { DeleteProductById } = useContext(ProductContext)

  const columns = [
    {
      name: '#',
      selector: (row, index) => index + 1,
      center: true,
    },
    {
      name: 'Thumbnail',
      cell: (row) => <img className="rounded-circle" alt="avatar1" src={row.thumbnail} />,
    },
    {
      name: 'Category',
      selector: row => row.category,
      sortable: true,
    },
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'Price',
      selector: row => row.price,
      sortable: true,
      cell: (row) => `${row.price} ₼`,
    },
    {
      name: 'Brand',
      selector: row => row.brand,
      sortable: true,
    },
    {
      name: 'Stock',
      selector: row => row.stock,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <button onClick={() => DeleteProductById(row.id)} className='btn btn-sm btn-danger ms-2'>
          <AiFillDelete />
        </button>
      ),
    },
  ];

  const tableData = products.map((item) => ({ ...item, id: item.id.toString() }));

  return (
    <div>
      <div className="row head-info mt-3 mb-2">
        <div className='col-lg-10'>
          <h6>All products ({products.length})</h6>
        </div>
        <div className='col-lg-2'>
          <Link to='/manage/products/add' className='btn btn-success form-control'>
            <IoMdAdd /> Add product
          </Link>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={tableData}
        pagination
        highlightOnHover
        striped
        responsive
      />
    </div>
  )
}

export default Products