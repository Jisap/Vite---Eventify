import { Icon } from "@iconify/react"
import Logo from "../Navbar/Logo/Logo"
import { Link } from "react-router-dom"


const footericon = "/Images/Footer/footer-icon.svg"
const tstbg = "/Images/bg-image.png"

const Footer = () => {
  return (
    <>
      <div className="footer-main px-[2%] sm:px-[8%] lg:px-[10%] pt-[6%] md:pt-[10%] bg-prim-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src={tstbg}
            alt="footer-icon"
            className="w-full h-full"
          />
        </div>


        <div className="footer-top z-10 relative text-white flex justify-between items-center gap-10 xl:gap-0 flex-col xl:flex-row mb-10">
          <h4 className="text-xl sm:text-3xl lg:text-4xl font-medium max-w-2xl font-unbounded text-center xl:text-left">
            Join our newsletter for event important announcement
          </h4>

          <div className="">
            <p className="flex items-center gap-3">
              <img
                src={footericon}
                alt="footer-icon"
                className="bg-white/20 p-2 rounded-full backdrop-blur-2xl"
              />
              Stay informed with instant updates delivred straight to your inbox.
            </p>

            <form className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/20 px-5 py-4 mt-5 rounded-xl outline-none"
                required
              />

              <Icon
                icon="la:telegram"
                width="35"
                height="35"
                className="bg-prim rounded-md p-1 absolute right-3 top-2.5 cursor-pointer"
              />
            </form>
          </div>
        </div>

        <div className="footer-wrap flex flex-wrap xl:flex-nowrap gap-10 xl:gap-0 z-10 relative py-8 sm:py-10 lg:py-20 border-t border-gray-50/20 border-b">
          <div className="footer-item lg:min-w-140">
            <Logo />

            <p className="pt-5 text-white max-w-md">
              Experience a world-class conference designed to inspire innovation, empower
              professsionals, and connect leaders from around the globe.
            </p>

            <div className="flex items-center gap-2 mt-5">
              <Link to="" className="w-10 h-10 rounded-full border border-prim flex justify-center items-center text-white group cursor-pointer hover:bg-prim transition-colors duration-300">
                <Icon icon="mdi:youtube" width="24" height="24" />
              </Link>
              <Link to="" className="w-10 h-10 rounded-full border border-prim flex justify-center items-center text-white group cursor-pointer hover:bg-prim transition-colors duration-300">
                <Icon icon="mdi:facebook" width="24" height="24" />
              </Link>
              <Link to="" className="w-10 h-10 rounded-full border border-prim flex justify-center items-center text-white group cursor-pointer hover:bg-prim transition-colors duration-300">
                <Icon icon="mdi:instagram" width="24" height="24" />
              </Link>
              <Link to="" className="w-10 h-10 rounded-full border border-prim flex justify-center items-center text-white group cursor-pointer hover:bg-prim transition-colors duration-300">
                <Icon icon="mdi:linkedin" width="24" height="24" />
              </Link>
            </div>
          </div>

          <div className="footer-links grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="footer-item">
              <h3 className="font-semibold text-2xl text-white pb-5">Quick Links</h3>

              <ul className="space-y-3 flex flex-col">
                <Link to="/" className="text-gray-light hover:text-prim transition-colors duration-300">
                  Home
                </Link>
                <Link to="/about" className="text-gray-light hover:text-prim transition-colors duration-300">
                  About
                </Link>
                <Link to="/speakers" className="text-gray-light hover:text-prim transition-colors duration-300">
                  Speakers
                </Link>
                <Link to="/faqs" className="text-gray-light hover:text-prim transition-colors duration-300">
                  Faqs
                </Link>
                <Link to="/contact" className="text-gray-light hover:text-prim transition-colors duration-300">
                  Contact
                </Link>
              </ul>
            </div>

            <div className="footer-item">
              <h3 className="font-semibold text-2xl text-white pb-5">Schedules</h3>

              <ul className="space-y-3 flex flex-col">
                <Link to="/" className="text-gray-light hover:text-prim transition-colors duration-300">
                  Future Finance
                </Link>
                <Link to="/" className="text-gray-light hover:text-prim transition-colors duration-300">
                  Tech Innovators
                </Link>
                <Link to="/" className="text-gray-light hover:text-prim transition-colors duration-300">
                  Sustainable Bussines
                </Link>
                <Link to="/" className="text-gray-light hover:text-prim transition-colors duration-300">
                  International Productivity
                </Link>
                <Link to="/" className="text-gray-light hover:text-prim transition-colors duration-300">
                  Creative Entrepreneurship
                </Link>
              </ul>
            </div>

            <div className="footer-item">
              <h3 className="font-semibold text-2xl text-white pb-5">Get In Touch</h3>

              <ul className="space-y-3 flex flex-col">
                <Link to="/" className="text-gray-light hover:text-prim transition-colors duration-300">
                  +00 123 456 789
                </Link>
                <Link to="/" className="text-gray-light hover:text-prim transition-colors duration-300">
                  support@domainame.com
                </Link>
                <Link to="/" className="text-gray-light hover:text-prim transition-colors duration-300">
                  12345 North West 5th Avenue, Miami, Florida 33169
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-center py-5 text-white font-semibold z-1 relative">
          <p className="text-gray-light hover:text-prim transition-colors duration-300">
            © 2026 Eventify. All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer