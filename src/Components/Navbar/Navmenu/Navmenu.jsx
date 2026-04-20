import { Icon } from '@iconify/react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navmenu = ({ menuOpen, toggleMenu, scrolled }) => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <ul className={`
        lg:flex hidden items-center gap-4 transition-colors 
        ${scrolled
          ? 'text-gray-900'
          : 'text-white'}
        `}
      >
        <li>
          <Link to="/" className="hover:bg-black hover:text-white px-3 py-2 rounded-sm transition-colors">
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" className="hover:bg-black hover:text-white px-3 py-2 rounded-sm transition-colors">
            About Us
          </Link>
        </li>

        <li>
          <Link to="/schedules" className="hover:bg-black hover:text-white px-3 py-2 rounded-sm transition-colors">
            Schedules
          </Link>
        </li>

        <li>
          <Link to="/blogs" className="hover:bg-black hover:text-white px-3 py-2 rounded-sm transition-colors">
            Blog
          </Link>
        </li>

        <li className='relative group'>
          <span className='cursor-pointer rounded-sm hover:bg-black hover:text-white px-3 py-2 transition-colors flex items-center group'>
            Pages
            <Icon
              icon="ep:arrow-down-bold"
              width="16"
              height="16"
              className='ms-2 transition-transform duration-300 group-hover:rotate-180'
            />
          </span>

          <ul className='absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden text-black'>
            <li>
              <Link to="/features" className='block px-4 py-2 hover:bg-black transition-colors duration-300 hover:text-white'>
                Features
              </Link>
            </li>

            <li>
              <Link to="/schedules/creative-entrepreneurship-forum" className='block px-4 py-2 hover:bg-black transition-colors duration-300 hover:text-white'>
                Schedules Details
              </Link>
            </li>

            <li>
              <Link to="/blogs/1" className='block px-4 py-2 hover:bg-black transition-colors duration-300 hover:text-white'>
                Blog Details
              </Link>
            </li>

            <li>
              <Link to="/speakers" className='block px-4 py-2 hover:bg-black transition-colors duration-300 hover:text-white'>
                Speakers
              </Link>
            </li>

            <li>
              <Link to="/pricingplan" className='block px-4 py-2 hover:bg-black transition-colors duration-300 hover:text-white'>
                Pricing Plan
              </Link>
            </li>

            <li>
              <Link to="/imagegallery" className='block px-4 py-2 hover:bg-black transition-colors duration-300 hover:text-white'>
                Image Gallery
              </Link>
            </li>

            <li>
              <Link to="/faqs" className='block px-4 py-2 hover:bg-black transition-colors duration-300 hover:text-white'>
                Faqs
              </Link>
            </li>

            <li>
              <Link to="/page404" className='block px-4 py-2 hover:bg-black transition-colors duration-300 hover:text-white'>
                Page 404
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/contact" className='hover:bg-black hover:text-white px-3 py-2 rounded-sm transition-colors'>
            Contact
          </Link>
        </li>
      </ul>

      <div
        onClick={toggleMenu}
        className={`
          fixed top-0 left-0 bg-black/40 z-30 transition-opacity duration-500 
          ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      />

      <div className={`
        fixed top-0 left-0 h-screen w-full sm:w-[60%] bg-white z-40 px-8 py-5 transform transition-transform duration-700 ease-in-out 
        ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className='flex justify-end mb-5'>
          <Icon
            icon="material-symbols-light:close"
            width="30"
            height="30"
            className='bg-prim text-white cursor-pointer'
            onClick={toggleMenu}
          />
        </div>

        <ul className='flex flex-col gap4'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/schedules">Schedules</Link></li>
          <li><Link to="/blogs">Blog</Link></li>
          <li className='relative'>
            <span
              onClick={() => setOpen(prev => !prev)}
              className='cursor-pointer hover:bg-prim hover:text-white rounded-sm transition-colors flex items-center'
            >
              Pages
              <Icon
                icon={open ? "ep:arrow-up-bold" : "ep-arrow-down-bold"}
                width="16"
                height="16"
                className='transition-transform duration-300 ms-2'
              />
            </span>

            <ul className={`
                absolute left-0 top-full mt-2 w-56 bg-white sm:shadow-lg rounded-md duration-300 z-50
                ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}
              `}>
              <li>
                <Link to="/features" className='block'>
                  Features
                </Link>
              </li>

              <li>
                <Link to="/schedules/global-hr-excellence-workshop" className='block'>
                  Schedules Details
                </Link>
              </li>

              <li>
                <Link to="/blogs/1" className='block'>
                  Blog Details
                </Link>
              </li>

              <li>
                <Link to="/speakers/1" className='block'>
                  Speaker Details
                </Link>
              </li>

              <li>
                <Link to="/pricingplan" className='block'>
                  Pricing Plan
                </Link>
              </li>

              <li>
                <Link to="/imagegallery" className='block'>
                  Image Gallery
                </Link>
              </li>

              <li>
                <Link to="/faqs" className='block'>
                  Faqs
                </Link>
              </li>

              <li>
                <Link to="/page404" className='block'>
                  Page 404
                </Link>
              </li>
            </ul>
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navmenu