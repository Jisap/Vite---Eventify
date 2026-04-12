import MarqueeIcon from "../../../assets/Images/Index/About/icon-marquee.svg";
import benefitImg1 from "../../../assets/Images/Index/Benefits/benefits-image01.jpg"
import benefitImg2 from "../../../assets/Images/Index/Benefits/benefits-image02.jpg"
import benefitsicon1 from "../../../assets/Images/Index/Benefits/benefits-icon01.svg"
import benefitsicon2 from "../../../assets/Images/Index/Benefits/benefits-icon02.svg"
import Mainbtn from "../../Buttons/Mainbtn";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";



const Benefits = () => {
  return (
    <>
      <div className="benefits px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] flex items-flex justify-between flex-col xl:flex-row gap-10 xl:gap-20">
        <div className='benefits-content xl:w-1/2 w-full'>
          <span className="flex items-center bg-prim w-fit  rounded-full text-white pe-3 text-sm md:text-md font-medium mb-3">
            <img
              src={MarqueeIcon}
              alt="marquee-icon"
              className="w-7 h-7 md:w-8 md:h-8 p-2"
            />
            Key Benefits
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-5 lg:mb-8">
            Key advantages that ensure your events stand out
          </h2>

          <ul className="flex items-center flex-wrap gap-5 border-b border-t border-gray-100 py-5 lg:py-8">
            <li className="flex items-start xl:items-center flex-col xl:flex-row gap-3">
              <img
                src={benefitsicon1}
                alt="benefits-icon1"
                className="bg-prim hover:bg-black transition-colors duration-300 w-10 h-10 lg:w-15 lg:h-15 p-3 rounded-lg cursor-pointer"
              />

              <div className="text-md sm:text-xl font-semibold pb-1">
                <h3>
                  Expert-Led Keynote Session
                </h3>

                <p className="text-gray-500 text-sm md:text-lg">
                  Experience inspiring keynote sessions led by industry experts who share valuable insights,
                  trends, and strategies to help you grow personally and professionally.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Benefits