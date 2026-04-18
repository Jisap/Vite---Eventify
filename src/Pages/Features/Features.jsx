import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import PageHeader from "../../Components/PageHeader/PageHeader"
import FeatureCard from "../../Components/FeatureCard/FeatureCard"
import featureData from "../../Data/Features.json"
import Highlights from "../../Components/Index/Highlights/Highlights"
import Benefits from "../../Components/Index/Benefits/Benefits"
import Testimonials from "../../Components/Index/Testimonials/Testimonials"
import Faqs from "../../Components/Index/Faqs/Faqs"


const sectionbanner = "/Images/section-banner.jpg"

const Features = () => {
  return (
    <>
      <PageHeader title="Our Features" bgImage={sectionbanner} />

      <div className="features px-[2%] sm:px-[8%] lg:px-[10%] py-[8%] md:py-[12%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-4xl lg:text-6xl font-bold font-unbounded text-prim-dark mb-6">
              Empowering your <br /> <span className="text-prim">event experience</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
              Discover the powerful tools and features we provide to make your events truly unforgettable and technologically advanced.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {featureData.map((item, index) => (
              <FeatureCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
                featurearrow="/Images/Index/Features/feature-arrow.svg"
              //dark={true}
              />
            ))}
          </div>
        </div>
      </div>

      <Highlights />
      <Benefits />
      <Testimonials />
      <Faqs />
    </>
  )
}

export default Features