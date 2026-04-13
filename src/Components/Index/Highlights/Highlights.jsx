import { useEffect, useState, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import highlights1 from "../../../assets/Images/Index/Highlights/highlights-image01.jpg"
import highlights2 from "../../../assets/Images/Index/Highlights/highlights-image02.jpg"
import highlights3 from "../../../assets/Images/Index/Highlights/highlights-image03.jpg"
import highlights4 from "../../../assets/Images/Index/Highlights/highlights-image04.jpg"

const items = [
  { title: "Interactive Panel Discussions", desc: "Build meaningful relationships with industry leaders, innovators", img: highlights1 },
  { title: "Connect With Top Professionals", desc: "Meet and connect with industry leaders, innovators, and experts from around the world", img: highlights2 },
  { title: "Exclusive Access Event Material", desc: "Gain exclusive access to presentations, resources, and materials from all sessions", img: highlights3 },
  { title: "Real Time Event Announcement", desc: "Stay updated with real-time announcements, schedules, and important notifications", img: highlights4 },
]

const Highlights = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const container = useRef()

  useEffect(() => {
    items.forEach(item => {
      const img = new Image()
      img.src = item.img
    })
  }, [])

  // Estado inicial: GSAP toma control desde el principio para evitar flashes
  useGSAP(() => {
    const bgImages = gsap.utils.toArray(".highlights-bg-image")
    bgImages.forEach((img, index) => {
      gsap.set(img, {
        opacity: index === 0 ? 1 : 0,
      })
    })
  }, { scope: container })

  useGSAP(() => {
    const bgImages = gsap.utils.toArray(".highlights-bg-image")
    const itemEls = gsap.utils.toArray(".highlights-item")

    // 1. Solo opacity para el crossfade — sin scale para evitar conflicto con ScrollSmoother
    bgImages.forEach((img, index) => {
      const isActive = index === activeIndex
      gsap.to(img, {
        opacity: isActive ? 1 : 0,
        duration: 1.2,
        ease: "power2.inOut",
        overwrite: "auto",
      })
    })

    // 2. Contenido - Animación de suavizado de texto y tarjetas
    itemEls.forEach((item, index) => {
      const isActive = index === activeIndex
      const contentWrap = item.querySelector(".content-wrap")
      const desc = item.querySelector(".desc-text")

      gsap.to(contentWrap, {
        y: isActive ? 0 : 16,
        opacity: isActive ? 1 : 0.45,
        duration: 0.9,
        ease: "power3.out",
        overwrite: "auto",
      })

      // maxHeight en lugar de height: "auto" — GSAP puede interpolarlo
      gsap.to(desc, {
        maxHeight: isActive ? 80 : 0,
        opacity: isActive ? 1 : 0,
        duration: 0.7,
        ease: "power2.inOut",
        overwrite: "auto",
      })
    })
  }, { dependencies: [activeIndex], scope: container })

  return (
    <div ref={container} className="relative h-200 overflow-hidden bg-prim-dark">

      {/* Background Images Layer */}
      <div className="absolute inset-0 z-0">
        {items.map((item, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 bg-cover bg-center highlights-effect highlights-bg-image 
              ${activeIndex === index ? 'is-active' : ''}
            `}
            style={{ backgroundImage: `url(${item.img})` }}
          />
        ))}
      </div>

      {/* Interactive Grid Layer */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 h-full">
        {items.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            className={`
              highlights-item h-full flex flex-col justify-end p-10 cursor-pointer 
              ${activeIndex === index ? 'active' : ''}
            `}
          >
            <div className="content-wrap space-y-4">
              <h4 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                {item.title}
              </h4>
              {/* Clase separada para GSAP — overflow hidden necesario para maxHeight */}
              <p className="desc-text text-gray-200 text-lg overflow-hidden">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Highlights