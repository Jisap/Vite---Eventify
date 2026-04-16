import { Icon } from "@iconify/react"
import { desc } from "framer-motion/client"
import { Link } from "react-router-dom"



const arrow = "/Images/Index/Blogs/arrow-icon.svg"

const BlogCard = ({
  id,
  image,
  title,
  author,
  desc,
  arrowImg,
  className = "",
  titleClass = "",
  descClass = "",
}) => {
  return (
    <>
      <Link
        to={`/blog/${id}`}
        className={`blog-item bg-gray-light p-3 rounded-md space-y-5 group cursor-pointer shadow-md block ${className}`}
      >
        <div className="blog-image rounded-md overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full group-hover:scale-110 transition-all duration-500"
          />
        </div>

        <div className="blog-content md:px-6">
          <span className="flex items-center gap-2 text-gray-500 pb-3">
            <Icon
              icon="ri:user-line"
              width="24"
              height="24"
              className="bg-prim w-6 h-6 rounded-full p-1 text-white"
            />
            {author}
          </span>

          <h4 className={`text-xl md:text-2xl font-semibold pb-3 ${titleClass}`}>
            {title}
          </h4>

          <p className={`text-gray-500 text-lg pb-8 border-b border-gray-500/10 ${descClass}`}>
            {desc}
          </p>

          <div className="flex items-center py-5 text-black font-semibold">
            Read More
            <img src={arrowImg} alt="arrow" className="ms-2 brightness-0" />
          </div>
        </div>
      </Link>
    </>
  )
}

export default BlogCard