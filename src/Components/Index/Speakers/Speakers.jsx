import { Icon } from "@iconify/react"
import MarqueeIcon from "../../../assets/Images/Index/About/icon-marquee.svg"
import authore1 from "../../../assets/Images/Index/Speakers/author-1.jpg"
import SpeakersCard from "../../SpeakersCard/SpeakersCard"
import speakerData from "../../../Data/Speakers.json"

const Speakers = () => {
  return (
    <>
      <div className="features px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] relative space-y-10 lg:space-y-20">

        <div className="features-content text-center mx-auto max-w-full lg:max-w-180 z-1 relative">
          <span className="flex items-center bg-prim w-fit mx-auto rounded-full text-white pe-3 text-sm md:text-md font-medium mb-3">
            <img
              src={MarqueeIcon}
              alt="marquee-icon"
              className="w-7 h-7 md:w-8 md:h-8 p-2"
            />
            Our Speakers
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
            Introducing the expert speakers joining our event.
          </h2>
        </div>

        <div className="speakers-wrap grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-10">
          {speakerData.slice(0, 3).map((item, index) => {
            // Resolve the image URL dynamically for Vite
            const imageName = item.image.split('/').pop()
            const imageUrl = new URL(
              `../../../assets/Images/Index/Speakers/${imageName}`,
              import.meta.url
            ).href

            return (
              <SpeakersCard
                key={index}
                id={item.id}
                image={imageUrl}
                name={item.name}
                role={item.role}
                socials={item.socials}
              />
            )
          })}
        </div>

        <div className="flex items-center gap-3 text-center w-full justify-center flex-wrap">
          <div className="flex items-center">
            <img
              src={authore1}
              alt="authore-img"
              className="w-8 h-8 rounded-full -me-4 border border-gray-400"
            />

            <Icon
              icon="famicons:call-outline"
              width="10"
              height="10"
              className="w-8 p-1 h-8 rounded-full bg-prim text-white "
            />
          </div>

          <p className="text-gray-400">
            Join our speaker and help weave innovation, quality, and success together worldwide.
          </p>
        </div>
      </div>
    </>
  )
}

export default Speakers