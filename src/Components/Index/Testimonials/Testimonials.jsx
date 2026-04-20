import { Icon } from "@iconify/react"
import Mainbtn from "../../Buttons/Mainbtn"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Link } from "react-router-dom"
import { useLayoutEffect, useRef } from "react"
import { revealUp, staggerReveal } from "../../../utils/gsapAnimations"
import { gsap } from "gsap"





const Testimonials = () => {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      revealUp(".testimonials-content")
      revealUp(".testimonials-main")
      revealUp(".brands")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const testimonials = [
    {
      id: 1,
      text: "The interface is incredibly user-friendly and the event setup process was seamless. Highly recommended!",
      name: "Sophia Rodriguez",
      role: "CEO of TechCorp",
      image: "/Images/Index/Testimonials/author-1.jpg",
    },
    {
      id: 2,
      text: "The platform is incredibly intuitive and easy to use. I was able to set up my event in minutes and the support team was always available to help.",
      name: "Ralph Edwards",
      role: "Director of Innovate Inc",
      image: "/Images/Index/Testimonials/author-2.jpg",
    },
    {
      id: 3,
      text: "The event management tools are top-notch. From ticketing to attendee engagement, everything is streamlined and efficient.",
      name: "Kristin Watson",
      role: "Global Marketin Director",
      image: "/Images/Index/Testimonials/author-3.jpg",
    },
  ]

  const brands = [
    { id: "brand-1", imag: "/Images/Index/Testimonials/company-logo-1.svg" },
    { id: "brand-2", imag: "/Images/Index/Testimonials/company-logo-2.svg" },
    { id: "brand-3", imag: "/Images/Index/Testimonials/company-logo-3.svg" },
    { id: "brand-4", imag: "/Images/Index/Testimonials/company-logo-4.svg" },
    { id: "brand-5", imag: "/Images/Index/Testimonials/company-logo-1.svg" },
    { id: "brand-6", imag: "/Images/Index/Testimonials/company-logo-2.svg" },
    { id: "brand-7", imag: "/Images/Index/Testimonials/company-logo-3.svg" },
    { id: "brand-8", imag: "/Images/Index/Testimonials/company-logo-4.svg" },

  ]

  return (
    <>
      <div ref={sectionRef} className="testimonials px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] bg-prim-dark relative space-y-10 lg:space-y-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src="/Images/bg-image.png"
            alt="testimonials-image"
            className="w-full h-full"
          />
        </div>

        <div className="testimonials-content text-center mx-auto max-w-full lg:max-w-180 z-1 relative">
          <span className="flex items-center bg-prim w-fit mx-auto rounded-full text-white pe-3 text-sm md:text-md font-medium mb-3">
            <img
              src="/Images/Index/About/icon-marquee.svg"
              alt="marquee-icon"
              className="w-7 h-7 md:w-8 md:h-8 p-2"
            />
            Testimonials
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            What our customers say about their experience
          </h2>
        </div>

        <div className="testimonials-main w-full flex justify-center items-center flex-col lg:flex-row z-10 relative gap-10 h-auto lg:h-90">
          <div className="bg-prim text-white flex justify-between items-start flex-col rounded-2xl p-5 sm:p-8 h-full gap-14 lg:gap-0 w-full sm:w-[50%] lg:w-[30%]">
            <div className="tst-info">
              <div className="author-image flex pb-4">
                <img src="/Images/Index/Testimonials/author-1.jpg" alt="author-image" className="w-8 h-8 rounded-full -me-3 border border-green-200" />
                <img src="/Images/Index/Testimonials/author-2.jpg" alt="author-image" className="w-8 h-8 rounded-full -me-3 border border-green-200" />
                <img src="/Images/Index/Testimonials/author-3.jpg" alt="author-image" className="w-8 h-8 rounded-full -me-3 border border-green-200" />
                <img src="/Images/Index/Testimonials/author-4.jpg" alt="author-image" className="w-8 h-8 rounded-full -me-3 border border-green-200" />
              </div>

              <p className="text-xl font-semibold">
                Over 15.000 Attendes Connected Worldwide
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb:0 sm:mb-8">
                Client Experience Speak For Themselves
              </h4>

              <Link to="/contact">
                <Mainbtn text="View All Reviews" className="bg-white! text-prim! hover:text-white hover:bg-black!" />
              </Link>
            </div>
          </div>

          <div className="relative w-full lg:w-[70%] h-full">
            <Swiper
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 4000 }}
              spaceBetween={30}
              slidesPerView={2}
              breakpoints={{
                1600: { slidesPerView: 2 },
                1000: { slidesPerView: 1.5 },
                0: { slidesPerView: 1 },
              }}
              className="w-full! h-full!"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="tst-item bg-white/10 p-5 sm:p-8 rounded-2xl h-full flex justify-between items-start flex-col">
                    <div className="tst-top border-b border-gray-50/10">
                      <div className="flex items-center gap-2 text-yellow-300 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            icon="material-symbols:star-rounded"
                            width="24"
                            height="24"
                          />
                        ))}
                      </div>

                      <p className="text-white mb-10 text-lg lg:text-xl font-semibold">
                        "{item.text}"
                      </p>
                    </div>

                    <div className="tst-author flex items-center gap-3 pt-5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-full w-12 h-12"
                      />

                      <div className="flex flex-col text-white">
                        <strong>{item.name}</strong>

                        <span className="text-gray-300 text-sm">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>
          </div>
        </div>

        <div className="brands text-center text-white font-medium w-full">
          <div className="flex items-center gap-5 w-full">
            <span className="divider-border flex-2 text-sm"></span>

            <h2 className="text-white font-semibold whitespace-nowrap text-sm sm:text-md">
              Upcoming Speaker Reveal - Dont't Miss Out
            </h2>

            <span className="divider-border flex-2 text-sm"></span>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false
            }}
            speed={4000}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 }
            }}
            className="mt-10 w-full marquee-swiper"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="brand-image flex justify-center items-center w-full ">
                  <img
                    src={brand.imag}
                    alt={brand.id}
                    className="opacity-70 hover:opacity-100 cursor-pointer transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Testimonials