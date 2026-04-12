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

            <li className="flex items-start xl:items-center flex-col xl:flex-row gap-3">
              <img
                src={benefitsicon2}
                alt="benefits-icon2"
                className="bg-prim hover:bg-black transition-colors duration-300 w-10 h-10 lg:w-15 lg:h-15 p-3 rounded-lg cursor-pointer"
              />

              <div className="text-md sm:text-xl font-semibold pb-1">
                <h3>
                  Advanced Event Technology
                </h3>

                <p className="text-gray-500 text-sm md:text-lg">
                  Leverage cutting-edge event technologies, including AI-powered matchmaking, virtual
                  environments, and seamless streaming, to create immersive and engaging experiences for
                  your attendees.
                </p>
              </div>
            </li>
          </ul>

          <div className="flex items-center flex-wrap gap-10 mt-8 lg:mt-10">
            <Link to="/schedules">
              <Mainbtn text="View Our Schedules" />
            </Link>

            <Link to="/" className="flex items-center gap-2">
              <Icon icon="material-symbols:call" width="24" height="24" className="bg-prim text-white w-10 h-10 p-2 rounded-s" />
              <p className="text-gray-500">
                <span className="block text-black">Call Now!</span>
                ++ 00 123 456 789
              </p>
            </Link>
          </div>
        </div>

        <div className="benefits-image xl:w-1/2 h-auto w-full relative">
          <div className="glass-effect overflow-hidden rounded-xl relative w-full">
            <img
              src={benefitImg1}
              alt="benefit-img1"
              className="rounded-xl w-full xl:max-w-112.5"
            />
          </div>

          <img
            src={benefitImg2}
            alt="benefitimg2"
            className="rounded-xl mt-5 h-100 w-112.5 absolute right-0 top-50 glass-effect hidden xl:block"
          />
        </div>
      </div>
    </>
  )
}

export default Benefits