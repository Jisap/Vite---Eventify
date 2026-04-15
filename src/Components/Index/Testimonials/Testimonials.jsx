import { Icon } from "@iconify/react"
import author1 from "../../../assets/Images/Index/Testimonials/author-1.jpg"
import author2 from "../../../assets/Images/Index/Testimonials/author-2.jpg"
import author3 from "../../../assets/Images/Index/Testimonials/author-3.jpg"
import author4 from "../../../assets/Images/Index/Testimonials/author-4.jpg"
import tstbf from "../../../assets/Images/Index/Testimonials/icon-marquee.svg"
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
      <div>

      </div>
    </>
  )
}

export default Testimonials