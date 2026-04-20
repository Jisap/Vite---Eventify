import React, { useLayoutEffect, useRef } from 'react'
import PageHeader from '../../Components/PageHeader/PageHeader'
import Mainbtn from '../../Components/Buttons/Mainbtn'
import { revealLeft, revealUp } from '../../utils/gsapAnimations'
import { gsap } from 'gsap'

const contactimg = "/Images/contact-us-img.jpg"



const Contact = () => {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        revealLeft(".contact-image")
        revealUp("form")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef}>
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

          <form onSubmit={(e) => e.preventDefault()} className='space-y-6 w-full xl:w-[55%] p-3 sm:p-5 lg:p-10'>
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

            <p className="text-gray-500 text-sm md:text-lg">
              Our team is always here to listen, support, and guide you. Whether you have questions,
              need assistance, or want to discuss your next project or event.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-prim focus:ring-4 focus:ring-prim/10 outline-none transition-all duration-300 bg-white placeholder:text-gray-400 font-sen"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-prim focus:ring-4 focus:ring-prim/10 outline-none transition-all duration-300 bg-white placeholder:text-gray-400 font-sen"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-prim focus:ring-4 focus:ring-prim/10 outline-none transition-all duration-300 bg-white placeholder:text-gray-400 font-sen"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-prim focus:ring-4 focus:ring-prim/10 outline-none transition-all duration-300 bg-white placeholder:text-gray-400 font-sen"
                />
              </div>
              <div className="flex flex-col space-y-2 md:col-span-2">
                <textarea
                  rows="4"
                  placeholder="Your Message..."
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-prim focus:ring-4 focus:ring-prim/10 outline-none transition-all duration-300 bg-white placeholder:text-gray-400 font-sen resize-none"
                  required
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-2">
                <Mainbtn text="Send Your Message" className="w-full sm:w-auto px-10" />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className='contact-map h-100 lg:h-150 w-full'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58156.08203067076!2d-3.7155974393020905!3d40.4192166440563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e1!3m2!1ses!2ses!4v1776684104245!5m2!1ses!2ses" width="100%" height="100%"></iframe>
      </div>
    </div>
  )
}

export default Contact