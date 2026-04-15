import { Icon } from "@iconify/react"
import Mainbtn from "../../Buttons/Mainbtn"
import { Link } from "react-router-dom"

const pricingPlans = [
  {
    id: 1,
    icon: "/Images/Index/Pricing/pricing-icon01.svg",
    title: "Basic Pass",
    subtitle: "Perfect for students & hobbyists",
    price: "$49",
    buttonText: "Get Basic pass",
    features: [
      "Entry to all standard sessions",
      "Digital certificate of attendance",
      "Access to community slack group",
      "Basic networking opportunities"
    ],
    popular: false
  },
  {
    id: 2,
    icon: "/Images/Index/Pricing/pricing-icon02.svg",
    title: "Standard Pass",
    subtitle: "Ideal for professionals",
    price: "$99",
    buttonText: "Get Standard pass",
    features: [
      "All Basic Pass features",
      "Lunch & refreshments included",
      "Q&A sessions with speakers",
      "Physical certificate & ID badge",
      "Priority workshop registration"
    ],
    popular: true
  },
  {
    id: 3,
    icon: "/Images/Index/Pricing/pricing-icon03.svg",
    title: "Premium Pass",
    subtitle: "The ultimate experience",
    price: "$199",
    buttonText: "Get Premium pass",
    features: [
      "All Standard Pass features",
      "VIP networking dinner event",
      "Exclusive swag kit & gear",
      "1-on-1 speaker brief sessions",
      "Reserved front-row seating"
    ],
    popular: false
  },
]

const Pricing = () => {
  return (
    <section className="pricing px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] relative overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-prim/5 rounded-full blur-[120px] -z-1" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-prim/10 rounded-full blur-[100px] -z-1" />

      <div className="pricing-content text-center mx-auto max-w-3xl mb-16 relative">
        <span className="flex items-center bg-prim w-fit mx-auto rounded-full text-white pe-3 text-sm md:text-md font-medium mb-3">
          <img src="/Images/Index/About/icon-marquee.svg"
            alt="marquee-icon"
            className="w-7 h-7 md:w-8 md:h-8 p-2"
          />
          Pricing Plan
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black tracking-tight">
          Flexible options for <span className="text-prim">every attendee</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Choose the plan that fits your needs. Join thousands of developers and designers for the event of the year.
        </p>
      </div>

      <div className="pricing-wrap grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`
              pricing-item relative group flex flex-col rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border ${plan.popular
                ? "bg-prim-dark border-prim-dark scale-105 z-10"
                : "bg-gray-light border-gray-100 hover:border-prim/30"
              }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-prim text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                Most Popular
              </div>
            )}

            <div className="p-8 pb-4">
              <div className="flex items-start justify-between mb-8">
                <div className={`
                  p-3 rounded-2xl 
                  ${plan.popular
                    ? "bg-white/10"
                    : "bg-prim/10 border border-prim/10 shadow-sm"
                  }`}
                >
                  <img
                    src={plan.icon}
                    alt={plan.title}
                    className={
                      `w-10 h-10 
                      ${!plan.popular
                        ? "brightness-0 invert-[0.4] sepia-[1] saturate-[20] hue-rotate-[190deg]"
                        : ""
                      }`
                    }
                  />
                </div>

                <div className="text-right">
                  <div className={`text-sm font-medium ${plan.popular ? "text-white/60" : "text-gray-500"}`}>
                    {plan.subtitle}
                  </div>

                  <h4 className={`text-xl font-bold ${plan.popular ? "text-white" : "text-black"}`}>
                    {plan.title}
                  </h4>
                </div>
              </div>

              <div className="flex items-baseline gap-1 mb-6">
                <span className={`text-5xl font-bold font-unbounded ${plan.popular ? "text-white" : "text-black"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.popular ? "text-white/60" : "text-gray-500"}`}>
                  / All inclusive
                </span>
              </div>
            </div>

            <div className={`flex-grow p-4 m-4 rounded-2xl ${plan.popular ? "bg-white/5 backdrop-blur-sm" : "bg-white"}`}>
              <div className="mb-6">
                <h5 className={`font-semibold mb-1 ${plan.popular ? "text-white" : "text-black"}`}>
                  Key Features
                </h5>

                <p className={`text-xs ${plan.popular ? "text-white/40" : "text-gray-400"}`}>
                  Everything you need to succeed
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${plan.popular ? "bg-prim text-white" : "bg-prim/10 text-prim"
                      }`}>
                      <Icon icon="lucide:check" width="12" height="12" />
                    </div>

                    <span className={`text-sm leading-tight transition-colors ${plan.popular ? "text-white/80 group-hover/item:text-white" : "text-gray-600 group-hover/item:text-black"
                      }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link to="/pricingPlan">
                <Mainbtn
                  text={plan.buttonText}
                  className={`w-full py-4 text-sm font-bold transition-all ${plan.popular
                      ? "bg-prim hover:bg-white hover:text-prim border-prim shadow-prim/20 shadow-lg"
                      : "bg-black hover:bg-prim text-white"
                    }`}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center flex-wrap gap-12 pt-10 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500 border border-green-100 shadow-sm">
            <Icon icon="solar:shield-check-bold" width="20" height="20" />
          </div>

          <div className="text-left">
            <div className="text-sm font-bold text-black">Secure Checkout</div>
            <div className="text-xs text-gray-400 text-nowrap">Protected by 256-bit SSL</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 border border-blue-100 shadow-sm">
            <Icon icon="solar:star-fall-bold" width="20" height="20" />
          </div>

          <div className="text-left">
            <div className="text-sm font-bold text-black">Money Back Guarantee</div>
            <div className="text-xs text-gray-400 text-nowrap">7-day no questions asked</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
