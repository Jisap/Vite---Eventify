import { Icon } from "@iconify/react"
import author1 from "../../../assets/Images/Index/Testimonials/author-1.jpg"
import author2 from "../../../assets/Images/Index/Testimonials/author-2.jpg"
import author3 from "../../../assets/Images/Index/Testimonials/author-3.jpg"
import author4 from "../../../assets/Images/Index/Testimonials/author-4.jpg"
import tstbg from "../../../assets/Images/bg-image.png"

import Mainbtn from "../../Buttons/Mainbtn"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import brand1 from "../../../assets/Images/Index/Testimonials/company-logo-1.svg"
import brand2 from "../../../assets/Images/Index/Testimonials/company-logo-2.svg"
import brand3 from "../../../assets/Images/Index/Testimonials/company-logo-3.svg"
import brand4 from "../../../assets/Images/Index/Testimonials/company-logo-4.svg"
import { Link } from "react-router-dom"
import MarqueeIcon from "../../../assets/Images/Index/About/icon-marquee.svg"





const Testimonials = () => {

  const testimonials = [
    {
      id: 1,
      text: "Truly outstanding service!",
      name: "Sophia Rodriguez",
      role: "CEO of TechCorp",
      image: author3,
    },
    {
      id: 2,
      text: "Truly outstanding service!",
      name: "Ralph Edwards",
      role: "Director of Innovate Inc",
      image: author3,
    },
    {
      id: 3,
      text: "Truly outstanding service!",
      name: "Kristin Watson",
      role: "Global Marketin Director",
      image: author3,
    },
  ]

  const brands = [
    { id: "brand-1", imag: brand1 },
    { id: "brand-2", imag: brand2 },
    { id: "brand-3", imag: brand3 },
    { id: "brand-4", imag: brand4 },
    { id: "brand-5", imag: brand1 },
    { id: "brand-6", imag: brand2 },
    { id: "brand-7", imag: brand3 },
    { id: "brand-8", imag: brand4 },

  ]

  return (
    <>
      <div className="testimonials px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] bg-prim-dark relative space-y-10 lg:space-y-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={tstbg}
            alt="testimonials-image"
            className="w-full h-full"
          />
        </div>

        <div className="testimonials-content text-center mx-auto max-w-full lg:max-w-180 z-1 relative">
          <span className="flex items-center bg-prim w-fit mx-auto rounded-full text-white pe-3 text-sm md:text-md font-medium mb-3">
            <img
              src={MarqueeIcon}
              alt="marquee-icon"
              className="w-7 h-7 md:w-8 md:h-8 p-2"
            />
            Testimonials
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            What our customers say about their experience
          </h2>
        </div>

        <div className="testimonials-main w-full flex justify-center items-center flex-col lg:flex-row z-10 relative gap-10 h-auto lg:h-90">
          <div className="bg-prim text-white flex justify-between items-start flex-col rounded-2xl p-5 sm:p-8 h-full gap-14 lg:gap-0 w-full sm:w-[50%] lg:w-[30%]">
            <div className="tst-info">
              <div className="author-image flex pb-4">
                <img src={author1} alt="author-image" className="w-8 h-8 rounded-full -me-3 border border-green-200" />
                <img src={author2} alt="author-image" className="w-8 h-8 rounded-full -me-3 border border-green-200" />
                <img src={author3} alt="author-image" className="w-8 h-8 rounded-full -me-3 border border-green-200" />
                <img src={author4} alt="author-image" className="w-8 h-8 rounded-full -me-3 border border-green-200" />
              </div>

              <p className="text-xl font-semibold">
                Over 15.000 Attendes Connected Worldwide
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb:0 sm:mb-8">
                Client Experience Speak For Themselves
              </h4>

              <Link to="/contact">
                <Mainbtn text="View All Reviews" className="bg-white! text-prim! hover:text-white hover:bg-black!" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials