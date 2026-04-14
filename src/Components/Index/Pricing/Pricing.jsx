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

const features = [
  "Entry to all standard sessions",
  "Reserved seating in select session",
  "Meet & greet with speakers",
  "Premium networking lounge"
]

const pricingPlans = [
  {
    icon: pricingicon1,
    title: "Basic Package",
    subtitle: "Perfect fot first-time attend",
    price: "49$",
    buttonText: "Get Basic pass"
  },
  {
    icon: pricingicon2,
    title: "Standard Pass",
    subtitle: "Perfect for first-time attend",
    price: "60$",
    buttonText: "Get Standard pass"
  },
  {
    icon: pricingicon3,
    title: "Premium Pass",
    subtitle: "For those who want more",
    price: "80$",
    buttonText: "Get Premium pass"
  },
]


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

        <div className="pricing-wrap grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="pricing-item bg-gray-light rounded-md">
              <div className="p-5 sm:p-10 pb-5">
                <div className="pricing-top flex items-center gap-3">
                  <div className="bg-prim hover:bg-black transition-colors duration-300 cursor-pointer w-fit p-2 rounded-sm">
                    <img
                      src={plan.icon}
                      alt="pricing-icon"
                      className="w-10 h-10"
                    />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold">
                      {plan.title}
                    </h4>

                    <span className="text-gray-500">
                      {plan.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-gray-500 pt-10">
                  <span className="text-4xl font-bold font-unbounded text-black">
                    {plan.price}
                  </span>
                  One-Time
                </p>
              </div>

              <div className="pricing-content bg-white p-4 sm:`-8 m-4 rounded-md">
                <div className="pricing-title pb-10 border-b border-gray-100">


                  <h4 className="text-xl font-semibold">
                    What's included:
                  </h4>

                  <span className="text-gray-500">
                    It could relate to a subscription
                  </span>
                </div>

                <ul className="sapce-y-5 my-7">
                  {features.map((feature, index) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Icon
                        icon="material-symbols:check-rounded"
                        width="18"
                        height="18"
                        className="bg-prim text-white rounded-full"
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/pricingPlan">
                  <Mainbtn
                    text={plan.buttonText}
                    className="w-full rounded-full!"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <ul className="flex justify-center items-center flex-wrap gap-8">
          <li className="flex items-center gap-1">
            <img src={pricingicon4} alt="pricing-icon" />
            <span>Get 30 day free trial</span>
          </li>

          <li className="flex items-center gap-1">
            <img src={pricingicon5} alt="pricing-icon" />
            <span>You can cancel anytime</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Pricing