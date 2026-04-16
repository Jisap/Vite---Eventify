import { Link, useLocation } from "react-router-dom"

const defaultBanner = "/Images/section-banner.jpg"

const PageHeader = ({ title, bgImage = defaultBanner }) => {
  const location = useLocation()
  const pathnames = location.pathname.split("/").filter((x) => x)

  return (
    <div
      className="section-banner h-90 lg:h-120 bg-center bg-cover flex flex-col justify-center items-center text-white bg-no-repeat relative px-[2%] overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-prim-dark/40 z-0"></div>

      <div className="relative z-10 text-center animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 uppercase tracking-tight">
          {title}
        </h1>

        <nav aria-label="Breadcrumb" className="flex justify-center items-center">
          <ol className="flex items-center space-x-2 text-sm md:text-md lg:text-lg font-medium">
            <li>
              <Link
                to="/"
                className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-1"
              >
                Home
              </Link>
            </li>

            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1
              const to = `/${pathnames.slice(0, index + 1).join("/")}`

              return (
                <li key={to} className="flex items-center space-x-2">
                  <span className="text-white/40">/</span>
                  {last ? (
                    <span className="text-prim font-semibold capitalize">
                      {value.replace(/-/g, " ")}
                    </span>
                  ) : (
                    <Link
                      to={to}
                      className="text-white/80 hover:text-white transition-colors duration-300 capitalize"
                    >
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
