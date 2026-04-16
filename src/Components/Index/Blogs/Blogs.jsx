import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import BlogsData from "../../../Data/Blog.json"
import BlogCard from "../../BlogCard/BlogCard"



const Blogs = () => {

  const MarqueeIcon = "/Images/Index/About/icon-marquee.svg"
  const blog2 = "/Images/Index/Blogs/blog-02.jpg"
  const blog3 = "/Images/Index/Blogs/blog-03.jpg"
  const arrow = "/Images/Index/Blogs/arrow-icon.svg"




  return (
    <>
      <div className='blog px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] relative space-y-10 lg:space-y-20'>
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
        </div>
      </div>
    </>
  )
}

export default Blogs