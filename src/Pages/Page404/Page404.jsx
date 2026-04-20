import React from 'react'
import PageHeader from '../../Components/PageHeader/PageHeader'
import { Link } from 'react-router-dom'
import Mainbtn from '../../Components/Buttons/Mainbtn'


const Page404 = () => {
  return (
    <>
      <PageHeader
        title="Page Not Found"
        breadcrumbTitle="404"
        bgImage="/Images/section-banner.jpg"
      />

      <div className='px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%]'>
        <div className='flex flex-col items-center justify-center'>
          <img src="/Images/404-error-img.png" alt="404 Error" className='mb-5' />

          <p className='text-gray-400 font-medium text-lg mb-5'>
            Oops! The page you are looking for does not exist.
          </p>

          <Link to="/">
            <Mainbtn
              text="Back to Home"
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Page404