import React, { useContext } from 'react'
import { CategoryContext } from '../../../context/CategoryContext'
import DataTable from 'react-data-table-component';
import './categories.css'

const Categories = () => {
  const { categories } = useContext(CategoryContext)

  const columns = [
    {
      name: '#',
      selector: (row, index) => index + 1,
      center: true
    },
    {
      name: 'Category Name',
      selector: row => row.categoryName,
      sortable: true,
    },
  ];

  const tableData = categories.map((item) => ({ categoryName: item }))

  return (
    <div>
      <div className="row">
        <div className='col-lg-12'>
          <h6>All categories ({categories.length})</h6>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={tableData}
        striped
        highlightOnHover
        pagination
        responsive
      />
    </div>
  )
}

export default Categories