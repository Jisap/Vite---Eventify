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

          <form className='space-y-6 w-full xl:w-[55%] p-3 sm:p-5 lg:p-10'>
            <span className="flex items-center bg-prim w-fit rounded-full text-white pe-3 text-sm md:text-md font-medium mb-3">
              <img
                src="/Images/Index/About/icon-marquee.svg"
                alt="marquee-icon"
                className="p-2 w-7 h-7 md:w-8 md:h-8"
              />
              Contact Us
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
              Get in touch with our team anytime today
            </h2>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact