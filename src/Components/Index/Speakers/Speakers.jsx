import { PhoneCall } from "lucide-react"
import SpeakersCard from "../../SpeakersCard/SpeakersCard"
import speakerData from "../../../Data/Speakers.json"
import { useLayoutEffect, useRef } from "react"
import { revealUp, staggerReveal } from "../../../utils/gsapAnimations"
import { gsap } from "gsap"

const Speakers = () => {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      revealUp(".features-content")
      staggerReveal(".speakers-wrap > div")
    }, sectionRef)
    return () => ctx.revert()
  }, [])
  return (
    <>
      <div ref={sectionRef} className="features px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] relative space-y-10 lg:space-y-20">

        <div className="features-content text-center mx-auto w-full max-w-4xl z-10 relative">
          <span className="flex items-center bg-prim w-fit mx-auto rounded-full text-white pe-3 text-sm md:text-md font-medium mb-3 shadow-lg">
            <img
              src="/Images/Index/About/icon-marquee.svg"
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
            return (
              <SpeakersCard
                key={item.id}          // ← usar id estable en lugar de index
                priority={index === 0} // ← solo la primera card carga en eager
                {...item}
              />
            )
          })}
        </div>

        <div className="flex items-center gap-3 text-center w-full justify-center flex-wrap">
          <div className="flex items-center">
            <img
              src="/Images/Index/Speakers/author-1.jpg"
              alt="authore-img"
              className="w-8 h-8 rounded-full -me-4 border border-gray-400"
            />

            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-prim text-white shadow-sm z-10">
              <PhoneCall size={14} />
            </div>
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