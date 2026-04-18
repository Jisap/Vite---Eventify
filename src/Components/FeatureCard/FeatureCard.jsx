import { Link } from "react-router-dom"

const FeatureCard = ({
  icon,
  title,
  description,
  className = "",
  titleclass = "",
  peraclass = "",
  featurearrow = "",
  btnlink = "",
  dark = false
}) => {
  return (
    <div className={`
      feature-item p-8 rounded-xl z-9 transition-all duration-300 group
      ${dark ? 'bg-prim-dark text-white' : 'bg-gray-light text-black'}
      ${className}
    `}>
      <div className="feature-icon bg-prim p-3 w-14 h-14 flex justify-center items-center rounded-xl mb-12 group-hover:scale-110 transition-transform duration-500">
        <img
          src={icon}
          alt="feature-icon"
          className="w-8 h-8 object-contain"
        />
      </div>

      <div className="feature-content">
        <h3 className={`
          text-xl lg:text-2xl font-bold mb-4 font-unbounded 
          ${dark ? 'text-white' : 'text-prim-dark'} 
          ${titleclass}
        `}>
          {title}
        </h3>

        <p className={`
          font-medium border-b pb-5 mb-5
          ${dark ? 'text-gray-400 border-white/10' : 'text-gray-500 border-black/5'} 
          ${peraclass}
        `}>
          {description}
        </p>

        <Link
          to="/contact"
          className={`
            flex items-center font-bold gap-2 cursor-pointer hover:gap-4 transition-all duration-300
            ${dark ? 'text-white' : 'text-prim-dark'} 
            ${btnlink}
          `}
        >
          Read More
          {featurearrow && (
            <img
              src={featurearrow}
              alt="feature-arrow"
              className={`w-4 h-4 object-contain ${!dark ? 'brightness-0' : ''}`}
            />
          )}
        </Link>
      </div>
    </div>
  )
}

export default FeatureCard