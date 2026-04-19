import { Link, useLocation } from "react-router-dom"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const defaultBanner = "/Images/section-banner.jpg"

const PageHeader = ({ 
  title, 
  bgImage = defaultBanner, 
  breadcrumbTitle, 
  category, 
  author, 
  date,
  authorImg
}) => {
  const location = useLocation()
  const pathnames = location.pathname.split("/").filter((x) => x)
  const headerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    tl.fromTo(".header-meta", 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
    .fromTo(".header-title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 },
      "-=0.6"
    )
    .fromTo(".header-info",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.8"
    )
    .fromTo(".breadcrumb-item",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
      "-=0.8"
    )

  }, { scope: headerRef })

  return (
    <div
      ref={headerRef}
      className="section-banner min-h-[450px] lg:min-h-[600px] flex flex-col justify-center items-center text-white relative px-[5%] overflow-hidden bg-prim-dark pt-40 pb-24"
    >
      <img 
        src={bgImage} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.6] scale-110 active-parallax"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-prim-dark/80 via-prim-dark/40 to-prim-dark/90 z-10"></div>

      <div className="relative z-20 text-center max-w-5xl mx-auto">
        {category && (
          <div className="header-meta mb-6 opacity-0">
            <span className="px-6 py-2 bg-prim text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-lg shadow-prim/20">
              {category}
            </span>
          </div>
        )}

        <h1 className="header-title text-4xl sm:text-5xl lg:text-5xl font-bold font-unbounded mb-8 uppercase tracking-tighter opacity-0 leading-[1.2]">
          {title}
        </h1>

        {(author || date) && (
          <div className="header-info flex flex-wrap justify-center items-center gap-6 mb-10 opacity-0 text-gray-300 font-medium">
            {author && (
              <div className="flex items-center gap-3">
                {authorImg && (
                  <img src={authorImg} alt={author} className="w-10 h-10 rounded-full border-2 border-prim/50 object-cover" />
                )}
                <span>By <span className="text-white font-bold">{author}</span></span>
              </div>
            )}
            {date && (
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-prim"></div>
                <span>{date}</span>
              </div>
            )}
          </div>
        )}

        <nav aria-label="Breadcrumb" className="flex justify-center items-center">
          <ol className="flex flex-wrap justify-center items-center space-x-2 text-sm md:text-md font-medium bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
            <li className="breadcrumb-item opacity-0">
              <Link to="/" className="text-white/80 hover:text-white transition-colors duration-300">
                Home
              </Link>
            </li>

            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1
              const to = `/${pathnames.slice(0, index + 1).join("/")}`

              return (
                <li key={to} className="breadcrumb-item flex items-center space-x-2 opacity-0">
                  <span className="text-white/40">/</span>
                  {last ? (
                    <span className="text-prim font-semibold capitalize max-w-[200px] truncate" title={breadcrumbTitle || value.replace(/-/g, " ")}>
                      {breadcrumbTitle || value.replace(/-/g, " ")}
                    </span>
                  ) : (
                    <Link to={to} className="text-white/80 hover:text-white transition-colors duration-300 capitalize">
                      {value.replace(/-/g, " ")}
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>
      </div>
    </div>
  )
}

export default PageHeader
