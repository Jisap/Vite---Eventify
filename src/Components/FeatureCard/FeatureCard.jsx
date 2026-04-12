import { Link } from "react-router-dom"




const FeatureCard = ({
  icon,
  title,
  description,
  classname = "",
  titleclass = "",
  peraclass = "",
  featurearrow = "",
  btnlink
}) => {
  return (
    <>
      <div className={`
        feature-item bg-white/20 p-8 rounded-xl z-9
        ${classname}
      `}
      >
        <div className="feature-icon bg-prim p-3 w-14 h-14 flex justify-center items-center rounded-xl mb-20">
          <img
            src={icon}
            alt="feature-icon"
          />
        </div>

        <div className="feature-content">
          <h3 className={`
            text-xl font-bold text-white mb-3 ${titleclass}  
            `}
          >
            {title}
          </h3>

          <p className={`
            font-medium text-gray-100 border-b border-gray-200/50 pb-3 ${peraclass}
            `}
          >
            {description}
          </p>

          <Link
            to="contact"
            className={`flex items-center text-white font-semibold gap-2 mt-5 cursor-pointer ${btnlink}`}
          >
            Read More
            {featurearrow && (
              <img
                src={featurearrow}
                alt="feature-arrow"
                className="w-4 h-4 object-contain"
              />
            )}
          </Link>
        </div>
      </div>
    </>
  )
}

export default FeatureCard