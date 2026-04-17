import featureData from "../../../Data/Features.json"
import FeatureCard from "../../FeatureCard/FeatureCard"
import { Icon } from "@iconify/react"

const Features = () => {
  return (
    <>
      <div className="features px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] bg-prim-dark relative space-y-10 lg:space-y-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src="/Images/bg-image.png"
            alt="features-image"
            className="w-full h-full"
          />
        </div>

        <div className="features-content text-center mx-auto max-w-full lg:max-w-180 z-1 relative">
          <span className="flex items-center bg-prim w-fit mx-auto rounded-full text-white pe-3 text-sm md:text-md font-medium mb-3">
            <img
              src="/Images/Index/About/icon-marquee.svg"
              alt="marquee-icon"
              className="w-7 h-7 md:w-8 md:h-8 p-2"
            />
            Core Features
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Core features that power our exceptional services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-8 xl:gap-10">
          {featureData.slice(0, 4).map((item) => {
            return (
              <FeatureCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
                featurearrow="/Images/Index/Features/feature-arrow.svg"
              />
            )
          })}
        </div>

        <div className="text-white text-center gap-4">
          <p className="font-medium pb-2">
            Join our team and help weave innovation, quality, and success together worldwide.
          </p>

          <div className="flex items-center justify-center gap-3 font-semibold text-md sm:text-xl">
            <span>4.9/5</span>

            <div className="flex items-center justify-center text-yellow-400">
              <Icon icon="material-symbols:star-rounded" width="24" height="24" />
              <Icon icon="material-symbols:star-rounded" width="24" height="24" />
              <Icon icon="material-symbols:star-rounded" width="24" height="24" />
              <Icon icon="material-symbols:star-rounded" width="24" height="24" />
              <Icon icon="material-symbols:star-rounded" width="24" height="24" />
            </div>

            <span>Our 4300 Reviews</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features