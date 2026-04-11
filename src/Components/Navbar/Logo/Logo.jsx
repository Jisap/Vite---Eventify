import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <>
      <Link to="/" className='logo text-white cursor-pointer text-xl font-medium font-unbounded'>
        Eventi <span className='text-prim'>fy.</span>
      </Link>
    </>
  )
}

export default Logo