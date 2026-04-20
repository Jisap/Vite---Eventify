import React from 'react'
import PageHeader from '../../Components/PageHeader/PageHeader'
import Mainbtn from '../../Components/Buttons/Mainbtn'

const contactimg = "../../Images/contact-us-img.jpg"



const Contact = () => {
  return (
    <>
      <PageHeader
        title="Contact Us"
        breadcrumbTitle="Contact"
        bgImage="/Images/section-banner.jpg"
      />

      <div className='px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%]'>
        <div className='bg-gray-light rounded-lg overflow-hidden flex justify-between items-center flex-col xl:flex-row'>
          <div className='contact-image w-full h-100 md:h-150 lg:h-250 xl:h-full xl:w-[45%] relative'>
            <img
              src={contactimg}
              alt="Contact Us"
              className='w-full h-full object-cover object-top'
            />
            <span className='absolute top-0 left-0 bg-black/20 w-full h-full'></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact