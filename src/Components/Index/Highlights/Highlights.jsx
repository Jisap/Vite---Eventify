import { useEffect, useState } from "react"
import hightlights1 from "../../../assets/Images/Index/Highlights/highlights-image01.jpg"
import hightlights2 from "../../../assets/Images/Index/Highlights/highlights-image02.jpg"
import hightlights3 from "../../../assets/Images/Index/Highlights/highlights-image03.jpg"
import hightlights4 from "../../../assets/Images/Index/Highlights/highlights-image04.jpg"

const items = [
  { title: "Interactive Panel Discussions", desc: "Build meaningful relationships with industry leaders, innovators", img: hightlights1 },
  { title: "Connect With Top Professionals", desc: "Meet and connect with industry leaders, innovators, and experts from around the world", img: hightlights2 },
  { title: "Exclusive Access Event Material", desc: "Gain exclusive access to presentations, resources, and materials from all sessions", img: hightlights3 },
  { title: "Real Time Event Announcement", desc: "Stay updated with real-time announcements, schedules, and important notifications", img: hightlights4 },
]

const Highlights = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    items.forEach(item => {
      const img = new Image();
      img.src = item.img;
    })
  }, []);

  return (
    <>
    <div className="relative h-200 overflow-hidden bg-prim-dark">
      {/* Background Images Layer */}
      <div className="absolute inset-0 z-0">
        {items.map((item, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out transform highlights-effect
              ${activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}
            `}
            style={{
              backgroundImage: `url(${item.img})`
            }}
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
              highlights-item h-full flex flex-col justify-end p-10 cursor-pointer transition-all duration-500
              ${activeIndex === index ? 'active' : ''}
            `}
          >
            <div className="space-y-4">
              <h4 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                {item.title}
              </h4>

              <p className={`
                text-gray-200 text-lg transition-all duration-500
                ${activeIndex === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 lg:opacity-40 lg:max-h-40'}
              `}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Highlights