import MarqueeIcon from "../../../assets/Images/Index/About/icon-marquee.svg"
import featuresimg from "../../../assets/Images/bg-image.png"
import featureData from "../../../Data/Features.json"
import FeatureCard from "../../FeatureCard/FeatureCard"
import featureArrow from "../../../assets/Images/Index/Features/feature-arrow.svg"

const Features = () => {
  return (
    <>
      <div className="features px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] bg-prim-dark relative space-y-10 lg:space-y-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={featuresimg}
            alt="features-image"
            className="w-full h-full"
          />
        </div>

        <div className="features-content text-center mx-auto max-w-full lg:max-w-180 z-1 relative">
          <span className="flex items-center bg-prim w-fit mx-auto rounded-full text-white pe-3 text-sm md:text-md font-medium mb-3">
            <img
              src={MarqueeIcon}
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
            // Resolve the icon URL dynamically for Vite
            const iconName = item.icon.split('/').pop()
            const iconUrl = new URL(
              `../../../assets/Images/Index/Features/${iconName}`,  // 1. Que buscas
              import.meta.url                                       // 2. Desde donde lo buscas
            ).href                                                  // 3. Cierre y propiedad

            return (
              <FeatureCard
                key={item.id}
                icon={iconUrl}
                title={item.title}
                description={item.description}
                featurearrow={featureArrow}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Features