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

      {/* Backdrop overlay */}
      <div
        onClick={toggleMenu}
        className={`
          fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-500 
          ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      />

      {/* Side Panel */}
      <div className={`
        fixed top-0 left-0 h-screen w-full sm:w-[400px] bg-prim-dark z-50 transform transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) text-white flex flex-col justify-between
        ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header mobile menu */}
        <div>
          <div className='flex justify-between items-center px-8 py-6 border-b border-white/10 mb-8'>
            <div className='text-xl font-unbounded font-medium'>
              Menu
            </div>
            <div
              onClick={toggleMenu}
              className='w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-prim transition-colors rounded-full cursor-pointer'
            >
              <Icon
                icon="material-symbols-light:close"
                width="28"
                height="28"
              />
            </div>
          </div>

          <nav className='px-8'>
            <ul className='flex flex-col gap-2'>
              {[
                { to: "/", label: "Home", icon: "solar:home-2-linear" },
                { to: "/about", label: "About Us", icon: "solar:info-circle-linear" },
                { to: "/schedules", label: "Schedules", icon: "solar:calendar-calendar-linear" },
                { to: "/blogs", label: "Blog", icon: "solar:document-text-linear" },
              ].map((item, index) => (
                <li
                  key={index}
                  className={`transform transition-all duration-500 border-b border-white/5 pb-2 ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link
                    to={item.to}
                    onClick={toggleMenu}
                    className='flex items-center gap-4 py-3 text-lg font-medium hover:text-prim transition-colors group'
                  >
                    <Icon icon={item.icon} width="22" className='text-prim group-hover:scale-110 transition-transform' />
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* Accordion Pages */}
              <li
                className={`transform transition-all duration-500 border-b border-white/5 pb-2 ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `400ms` }}
              >
                <div
                  onClick={() => setOpen(!open)}
                  className='flex items-center justify-between py-3 text-lg font-medium cursor-pointer hover:text-prim transition-colors group'
                >
                  <div className='flex items-center gap-4'>
                    <Icon icon="solar:layers-linear" width="22" className='text-prim group-hover:scale-110 transition-transform' />
                    Pages
                  </div>
                  <Icon
                    icon={open ? "ep:arrow-up-bold" : "ep:arrow-down-bold"}
                    width="14"
                    className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                  />
                </div>

                <div className={`
                    overflow-hidden transition-all duration-300 bg-white/5 rounded-lg px-4
                    ${open ? 'max-h-[500px] py-4 mt-2' : 'max-h-0'}
                  `}>
                  {[
                    { to: "/features", label: "Features" },
                    { to: "/schedules/global-hr-excellence-workshop", label: "Schedules Details" },
                    { to: "/blogs/1", label: "Blog Details" },
                    { to: "/speakers", label: "Speakers" },
                    { to: "/pricingplan", label: "Pricing Plan" },
                    { to: "/imagegallery", label: "Image Gallery" },
                    { to: "/faqs", label: "FAQs" },
                    { to: "/page404", label: "Page 404" },
                  ].map((sub, sIndex) => (
                    <Link
                      key={sIndex}
                      to={sub.to}
                      onClick={toggleMenu}
                      className='block py-2 text-gray-400 hover:text-white transition-colors'
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </li>

              <li
                className={`transform transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `500ms` }}
              >
                <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className='flex items-center gap-4 py-3 text-lg font-medium hover:text-prim transition-colors group'
                >
                  <Icon icon="solar:letter-linear" width="22" className='text-prim group-hover:scale-110 transition-transform' />
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Footer mobile menu */}
        <div className={`
          p-8 border-t border-white/10 transform transition-all duration-1000 
          ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <div className='flex gap-4 mb-6'>
            {['ri:facebook-fill', 'ri:twitter-x-fill', 'ri:instagram-line', 'ri:linkedin-fill'].map((social, idx) => (
              <a key={idx} href="#" className='w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-prim hover:scale-110 transition-all'>
                <Icon icon={social} width="20" />
              </a>
            ))}
          </div>
          <p className='text-sm text-gray-500'>
            © 2026 Eventify. <br />
            Join the tech revolution.
          </p>
        </div>
      </div>
    </>
  )
}

export default Navmenu