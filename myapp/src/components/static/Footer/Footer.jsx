import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='p-3 text-bg-secondary'>
        &copy; Copyright - {new Date().getFullYear()}
    </footer>
  )
}

export default Footer