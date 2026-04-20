import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { useLayoutEffect, useRef } from "react"
import { revealUp } from "../../../utils/gsapAnimations"
import { gsap } from "gsap"

const Marquee = () => {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      revealUp(sectionRef.current)
    }, sectionRef)
    return () => ctx.revert()
  }, [])


  const items = [
    "Workshop Alerts",
    "Quick Updates",
    "Latest Updates",
    "New Announcements",
    "Live Countdown",
    "Live Notice",
    "Event Countdown",
    "Workshop Alerts",
    "Quick Updates",
    "Latest Updates",
    "New Announcements",
    "Live Countdown",
    "Live Notice",
    "Event Countdown",
    "Workshop Alerts",
  ]

  return (
    <>
      <div ref={sectionRef} className="w-full bg-prim text-white py-5 overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={40}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false
          }}
          freeMode={true}
          className="swiper-wrapper"
        >
          {items.map((text, index) => (
            <SwiperSlide key={index} className="w-auto!">
              <div className="flex items-center">
                 <img
                  src="/Images/Index/Marquee/icon-marquee.svg"
                  alt="marquee-icon"
                  className="me-7"
                />

                <span className="text-3xl whitespace-nowrap hover:text-black transition-colors duration-300 cursor-pointer">
                  {text}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Marquee