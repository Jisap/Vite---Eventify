
import PageHeader from '../../Components/PageHeader/PageHeader'
import { Link, useParams } from 'react-router-dom'
import { useMemo } from 'react'
import BlogData from '../../Data/Blog.json'
import Logo from '../../Components/Navbar/Logo/Logo'
import { Icon } from '@iconify/react'



const sectionbanner = "/Images/section-banner.jpg"

const BlogDetails = () => {

  const { id } = useParams();

  const blog = useMemo(() =>
    BlogData.find((s) => s.id.toString() === id), [id]
  );

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <h1 className="text-4xl font-bold text-prim-dark mb-4 uppercase tracking-tighter">Blog Not Found</h1>
        <p className="text-gray-500 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
        <button
          onClick={() => window.history.back()}
          className="px-8 py-3 bg-prim text-white font-bold rounded-xl hover:bg-prim-dark transition-all duration-300 shadow-lg"
        >
          GO BACK
        </button>
      </div>
    )
  };

  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title={blog.title} 
        category={blog.category}
        author={blog.author}
        date={blog.date}
        bgImage={sectionbanner} 
        breadcrumbTitle={blog.title} 
      />
      
      <div className="px-[5%] lg:px-[10%] py-20 max-w-7xl mx-auto">
        <div className="flex flex-col gap-10 lg:gap-20">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl relative group">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 relative">
            {/* Sidebar with Blog Info */}
            <div className="w-full lg:w-1/3 order-2 lg:order-1">
              <div className="sticky top-10 space-y-10">
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-xl">
                  <h4 className="text-xl font-bold text-prim-dark mb-6 flex items-center gap-2">
                    <div className="w-2 h-8 bg-prim rounded-full"></div>
                    Quick Facts
                  </h4>
                  <ul className="space-y-6">
                    <li className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-prim">
                         <Icon icon="ri:calendar-line" width="24" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Published On</p>
                        <p className="text-prim-dark font-bold">{blog.date}</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-prim">
                         <Icon icon="ri:user-3-line" width="24" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Author</p>
                        <p className="text-prim-dark font-bold">{blog.author}</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-prim">
                         <Icon icon="ri:bookmark-line" width="24" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Category</p>
                        <p className="text-prim-dark font-bold">{blog.category}</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="p-8 bg-prim-dark rounded-3xl text-white overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-prim/20 rounded-full blur-3xl -translate-y-10 translate-x-10"></div>
                  <h4 className="text-2xl font-bold mb-4 relative z-10">Stay Updated</h4>
                  <p className="text-gray-400 mb-6 relative z-10 text-sm">Join our newsletter to receive the latest news and updates directly in your inbox.</p>
                  <div className="flex gap-2 relative z-10">
                    <input type="text" placeholder="Your email" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full outline-none focus:border-prim transition-colors" />
                    <button className="p-3 bg-prim hover:bg-white hover:text-prim-dark text-white rounded-xl transition-all duration-300">
                      <Icon icon="ri:send-plane-fill" width="20" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-2/3 order-1 lg:order-2">
              <div className="prose prose-xl prose-gray max-w-none text-gray-600 leading-relaxed space-y-8">
                <p className="text-2xl lg:text-3xl font-medium text-prim-dark leading-snug">
                  {blog.desc}
                </p>
                <p>
                  At <span className="text-prim font-bold">Eventify</span>, we believe that every event is an opportunity to create something extraordinary. The landscape of event management is constantly evolving, and staying ahead of the curve is essential for success. 
                </p>
                
                <h3 className="text-3xl font-bold text-prim-dark pt-6">Transforming the Experience</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

                <div className="bg-gray-50 p-10 rounded-3xl border-l-8 border-prim italic text-2xl font-medium text-prim-dark my-10 shadow-sm">
                  "Success in the event industry isn't just about technical precision; it's about creating emotional connections that last long after the lights go down."
                </div>

                <h3 className="text-3xl font-bold text-prim-dark pt-6">The Future is Here</h3>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                
                <div className="flex flex-wrap gap-3 pt-10 border-t border-gray-100">
                  <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-bold text-gray-500 uppercase">#Events</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-bold text-gray-500 uppercase">#Technology</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-bold text-gray-500 uppercase">#Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails