import React from 'react'
import PageHeader from '../../Components/PageHeader/PageHeader'
import BlogData from '../../Data/Blog.json'
import { Link } from 'react-router-dom'
import BlogCard from '../../Components/BlogCard/BlogCard'


const sectionbanner = "/Images/section-banner.jpg"

const Blog = () => {
  return (
    <>
      <PageHeader title="Blog" bgImage={sectionbanner} />

      <div className='px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] xl:py-[5%]'>
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-4xl lg:text-6xl font-bold font-unbounded text-prim-dark mb-6">
            Latest <br /> <span className="text-prim">blog posts</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            The latest news and updates from the world of events and technology.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {BlogData.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              image={blog.image}
              title={blog.title}
              author={blog.author}
              desc={blog.desc}
              arrowImg={blog.arrowImg}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Blog