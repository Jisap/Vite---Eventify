import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import BlogsData from "../../../Data/Blog.json"
import BlogCard from "../../BlogCard/BlogCard"
import { useLayoutEffect, useRef } from "react"
import { revealUp } from "../../../utils/gsapAnimations"
import { gsap } from "gsap"



const Blogs = () => {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      revealUp(".blog-conten")
      revealUp(".blog-main")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const MarqueeIcon = "/Images/Index/About/icon-marquee.svg"
  const arrowImg = "/Images/Index/Blogs/arrow-icon.svg"
  const blog2 = "/Images/Index/Blogs/blog-02.jpg"
  const blog3 = "/Images/Index/Blogs/blog-03.jpg"
  const arrow = "/Images/Index/Blogs/arrow-icon.svg"




  return (
    <>
      <div ref={sectionRef} className='blog px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] relative space-y-10 lg:space-y-20'>
        <div className='blog-conten text-center mx-auto max-w-full lg:max-w-180 z-1 relative'>
          <span className='flex items-center bg-prim w-fit mx-auto rounded-full text-white pe-3 text-sm md:text-md font-medium mb-3'>
            <img src={MarqueeIcon} alt="marquee-icon" className='p-2 w-7 h-7 md:w-8 md:h-8' />
            Latest Blog
          </span>

          <h2 className='text-2xl sm:text-4xl md:text-5xl font-bold text-black'>
            Explore our latest insights stories and updates
          </h2>

        </div>

        <div className='blog-main grid grid-cols-1 xl:grid-cols-2 gap-10'>
          {BlogsData.slice(0, 1).map((item) => (
            <BlogCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              author={item.author}
              desc={item.desc}
              arrowImg={item.arrowImg}
            />
          ))}

          <div className="flex flex-col items-start gap-10">
            <div className="blog-item h-full bg-gray-light rounded-md group cursor-pointer flex justify-between items-center flex-col md:flex-row gap-5 p-5 shadow-md">
              <div className="blog-image rounded-md h-full overflow-hidden w-full md:w-[40%]">
                <img src={blog2} alt="blog-img" className="w-full group-hover:scale-110 h-full object-cover transition-all duration-500" />
              </div>

              <div className="blog-content w-full md:w-[60%]">
                <span className="flex items-center gap-2 text-gray-500 pb-3">
                  <Icon
                    icon="ri:user-line"
                    width="24"
                    height="24"
                    className="bg-prim w-6 h-6 rounded-full p-1 text-white"
                  />
                  Awaiken
                </span>

                <h4 className="text-xl md:text-2xl font-semibold pb-3">
                  Simple Self-Defense Skills Everyone Should Learn for Safety
                </h4>

                <p className="text-gray-500 text-lg pb-8 border-b border-gray-500/10">
                  Staying safe in everyday life doesnt require advanced
                </p>

                <Link to="/blogs" className="flex items-center py-5 text-black font-semibold">
                  Read More
                  <img src={arrowImg} alt="arrow" className="ms-2 brightness-0" />
                </Link>

              </div>
            </div>

            <div className="blog-item h-full bg-gray-light rounded-md group cursor-pointer flex justify-between items-center flex-col md:flex-row gap-5 p-5 shadow-md">
              <div className="blog-image rounded-md h-full overflow-hidden w-full md:w-[40%]">
                <img src={blog3} alt="blog-img" className="w-full group-hover:scale-110 h-full object-cover transition-all duration-500" />
              </div>

              <div className="blog-content w-full md:w-[60%]">
                <span className="flex items-center gap-2 text-gray-500 pb-3">
                  <Icon
                    icon="ri:user-line"
                    width="24"
                    height="24"
                    className="bg-prim w-6 h-6 rounded-full p-1 text-white"
                  />
                  Awaiken
                </span>

                <h4 className="text-xl md:text-2xl font-semibold pb-3">
                  The Power of Networking: Building Connections That Last
                </h4>

                <p className="text-gray-500 text-lg pb-8 border-b border-gray-500/10">
                  Networking is more than just exchanging business cards.
                </p>

                <Link to="/blogs" className="flex items-center py-5 text-black font-semibold">
                  Read More
                  <img src={arrowImg} alt="arrow" className="ms-2 brightness-0" />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs