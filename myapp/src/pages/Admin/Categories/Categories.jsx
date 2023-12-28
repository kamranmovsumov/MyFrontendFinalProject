import React, { useContext } from 'react'
import { CategoryContext } from '../../../context/CategoryContext'
import './categories.css'

const Categories = () => {
  const context = useContext(CategoryContext)

  if (context.categories.length === 0) {
    return (
      <div className="alert alert-danger col-lg-6 mx-auto text-center mt-5" role="alert">
        Categories table is empty!
      </div>
    )
  }

  return (
    <div>
      <div className="row mt-3">
        <div className='col-lg-12'>
          <h3>All categories ({context.categories.length})</h3>
        </div>
      </div>
      <table className="table table-bordered table-striped table-hover">
        <thead className='table-primary'>
          <tr className=''>
            <th>#</th>
            <th>Category Name</th>
          </tr>
        </thead>
        <tbody>
          {
            context.categories && context.categories.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div >
  )
}

export default Categories