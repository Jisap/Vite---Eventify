import aboutImg from "../../../assets/Images/Index/About/about-us-image.jpg"
import AchievementImg from "../../../assets/Images/Index/About/about-achievement-image.png"
import CircleText from "../../Circletext/Circletext"
import MarqueeIcon from "../../../assets/Images/Index/About/icon-marquee.svg"

import aboutIcon1 from "../../../assets/Images/Index/About/about-icon1.svg"
import aboutIcon2 from "../../../assets/Images/Index/About/about-icon2.svg"
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import { useState } from "react"
import Circletext from "../../Circletext/Circletext"



const About = () => {

  const [active, setActive] = useState("mission")

  return (
    <>
      <div className='about px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] flex items-center justify-between flex-col lg:flex-row lg:gap-20'>
        <div className='about-image lg:w-1/2 w-full relative'>
          <div className='glass-effect relative overflow-hidden rounded-xl'>
            <img src={aboutImg} alt="about-image" className="w-full rounded-xl" />
          </div>

          <div className="achievement bg-white shadow-xl max-w-90 rounded-xl text-center ms-auto absolute top-70 -right-15 md:block hidden">
            <div className="achievement-content w-full text-center mb-8 px-5 pt-6">
              <img
                src={AchievementImg}
                alt="achievement-image"
                className="w-45 h-45 object-contain mx-auto mb-10 pt-5"
              />

              <h3 className="font-semibold text-lg">
                "Institute for Professional Achievement Awards 2025"
              </h3>

              <p className="text-gray-500 font-medium">
                by-Nisha Trivedi
              </p>
            </div>

            <h3 className="bg-gray-light py-6 font-semibold text-2xl px-5">
              Celbrating Achievement with Pride
            </h3>
          </div>

          <Circletext />
        </div>
      </div>
    </>
  )
}

export default About