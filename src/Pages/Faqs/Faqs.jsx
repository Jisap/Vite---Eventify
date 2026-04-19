
import PageHeader from '../../Components/PageHeader/PageHeader'
import Faqs from '../../Components/Index/Faqs/Faqs'
import { Icon } from '@iconify/react'
import Logo from '../../Components/Navbar/Logo/Logo'
import { useRef, useState } from 'react'

const sidebarimg = "/Images/sidebar-image.jpg"
const faqicon = "/Images/FaqsPage/faqs-icon.svg"


const FaqsPage = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const generalRef = useRef(null);
  const ticketRef = useRef(null);
  const eventRef = useRef(null);
  const sessionRef = useRef(null);
  const foodRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <>
      <PageHeader
        title="Faqs"
        breadcrumbTitle="Faqs"
        bgImage="/Images/section-banner.jpg"
      />

      <div className='px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] flex justify-between items-start flex-col xl:flex-row gap-10'>
        <div className='w-full xl:w-[30%] space-y-10 relative xl:sticky xl:top-0 xl:left-0 h-full'>
          <div className='info w-full bg-gray-light rounded-lg overflow-hidden shadow-xl'>
            <button
              onClick={() => scrollToSection(generalRef)}
              className='flex items-center w-full justify-between border-b border-gray-300 py-5 px-5 group'
            >
              <span className='text-gray-500 font-normal group-hover:text-black transition-color duration-300'>
                General Questions
              </span>

              <img
                src={faqicon}
                alt="icon"
              />
            </button>

            <button
              onClick={() => scrollToSection(ticketRef)}
              className='flex items-center w-full justify-between border-b border-gray-300 py-5 px-5 group'
            >
              <span className='text-gray-500 font-normal group-hover:text-black transition-color duration-300'>
                Ticket & Payment
              </span>

              <img
                src={faqicon}
                alt="icon"
              />
            </button>

            <button
              onClick={() => scrollToSection(eventRef)}
              className='flex items-center w-full justify-between border-b border-gray-300 py-5 px-5 group'
            >
              <span className='text-gray-500 font-normal group-hover:text-black transition-color duration-300'>
                Event Details
              </span>

              <img
                src={faqicon}
                alt="icon"
              />
            </button>

            <button
              onClick={() => scrollToSection(sessionRef)}
              className='flex items-center w-full justify-between border-b border-gray-300 py-5 px-5 group'
            >
              <span className='text-gray-500 font-normal group-hover:text-black transition-color duration-300'>
                Session & Activities
              </span>

              <img
                src={faqicon}
                alt="icon"
              />
            </button>

            <button
              onClick={() => scrollToSection(foodRef)}
              className='flex items-center w-full justify-between py-5 px-5 group'
            >
              <span className='text-gray-500 font-normal group-hover:text-black transition-color duration-300'>
                Food, Facilities & Accessibility
              </span>

              <img
                src={faqicon}
                alt="icon"
              />
            </button>

          </div>

          <div className='bg-prim-dark text-white p-10 rounded-lg overflow-hidden'>
            <Logo />

            <h3 className='pt-5 font-semibold text-2xl'>We're here to help-reach out today.</h3>

            <span className='flex items-center font-semibold text-2xl mt-8'>
              <Icon
                icon="famicons:call-outline"
                width="45"
                height="45"
                className='bg-prim p-2 rounded-full me-3'
              />
              +1 (234) 567-890
            </span>

            <div className='w-130 mt-8 xl:mt-0 xl:translate-x-0 xl:translate-y-23 relative'>
              <img src={sidebarimg} alt="sidebar-img" className='border-10 border-[#ffffff1a] rounded-full' />
            </div>
          </div>
        </div>

        <div className='w-full xl:w-[70%]'>
          <h3 className='text-2xl lg:text-5xl font-bold font-unbounded'>
            General Questions
          </h3>
        </div>
      </div>
    </>
  )
}

export default FaqsPage