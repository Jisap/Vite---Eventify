import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ scrolled }) => {
  return (
    <>
      <Link to="/" className={`
        logo cursor-pointer text-xl font-medium font-unbounded transition-colors 
        ${scrolled
          ? 'text-gray-900'
          : 'text-white'}
        `}
      >
        Eventi <span className='text-prim'>fy.</span>
      </Link>
    </>
  )
}

export default Logo