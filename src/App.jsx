import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='h-[5000px]'>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App