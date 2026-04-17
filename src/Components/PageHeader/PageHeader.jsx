import { Link, useLocation } from "react-router-dom"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const defaultBanner = "/Images/section-banner.jpg"

const PageHeader = ({ title, bgImage = defaultBanner }) => {
  const location = useLocation()
  const pathnames = location.pathname.split("/").filter((x) => x)
  const headerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    tl.fromTo(".header-title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 }
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
      className="section-banner h-[350px] lg:h-[450px] flex flex-col justify-center items-center text-white relative px-[2%] overflow-hidden bg-prim-dark"
    >
      <img 
        src={bgImage} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover z-0"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      <div className="absolute inset-0 bg-prim-dark/50 z-10"></div>

      <div className="relative z-20 text-center">
        <h1 className="header-title text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 uppercase tracking-tight opacity-0">
          {title}
        </h1>

        <nav aria-label="Breadcrumb" className="flex justify-center items-center">
          <ol className="flex items-center space-x-2 text-sm md:text-md lg:text-lg font-medium">
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
                    <span className="text-prim font-semibold capitalize">
                      {value.replace(/-/g, " ")}
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
