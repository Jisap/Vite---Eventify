import MarqueeIcon from "../../../assets/Images/Index/About/icon-marquee.svg"
import featuresimg from "../../../assets/Images/bg-image.png"

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
      </div>
    </>
  )
}

export default Features