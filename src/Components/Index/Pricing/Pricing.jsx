import { Icon } from "@iconify/react"
import MarqueeIcon from "../../../assets/Images/Index/About/icon-marquee.svg"
import pricingicon1 from "../../../assets/Images/Index/Pricing/pricing-icon01.svg"
import pricingicon2 from "../../../assets/Images/Index/Pricing/pricing-icon02.svg"
import pricingicon3 from "../../../assets/Images/Index/Pricing/pricing-icon03.svg"
import pricingicon4 from "../../../assets/Images/Index/Pricing/pricing-icon04.svg"
import pricingicon5 from "../../../assets/Images/Index/Pricing/pricing-icon05.svg"
import pricingicon6 from "../../../assets/Images/Index/Pricing/pricing-icon06.svg"
import Mainbtn from "../../Buttons/Mainbtn"
import { Link } from "react-router-dom"




const Pricing = () => {
  return (
    <>
      <div className="pricing px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] relative space-y-10 lg:space-y-20">
        <div className="pricing-content text-center mx-auto max-w-full lg:max-w-180 z-1 relative">
          <span className="flex items-center bg-prim w-fit mx-auto rounded-full text-white pe-3 text-sm md:text-md font-medium mb-3">
            <img src={MarqueeIcon}
              alt="marquee-icon"
              className="w-7 h-7 md:w-8 md:h-8 p-2"
            />
            Pricing Plan
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
            Discover our flexible pricing plans for attendees
          </h2>
        </div>
      </div>
    </>
  )
}

export default Pricing