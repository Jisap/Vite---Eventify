import { Link } from "react-router-dom"
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"

const getSocialIcon = (name) => {
  switch (name.toLowerCase()) {
    case "twitter": return <FaTwitter className="w-5 h-5 shrink-0" />
    case "linkedin": return <FaLinkedinIn className="w-5 h-5 shrink-0" />
    case "instagram": return <FaInstagram className="w-5 h-5 shrink-0" />
    default: return null
  }
}

const SpeakersCard = ({
  id,
  image,
  name,
  role,
  socials = [],
  className = "",
  nameClass = "",
  roleClass = "",
  priority = false
}) => {
  return (
    <div className={`speakers-item bg-gray-light rounded-md relative ${className}`}>
      {/* Contenedor estricto de imagen con skeleton integrado para prevenir Layout Shift */}
      <div className="speakers-image p-3 relative overflow-hidden group w-full aspect-[3/4] bg-gray-200 glass-effect">
        <img
          src={image}
          alt={name}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover rounded-md group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform"
        />

        <ul className="space-y-3 absolute right-8 bottom-8 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {socials.map((item, index) => (
            <li key={index} className="text-prim bg-white hover:bg-prim hover:text-white w-fit p-3 rounded-full transition-colors duration-300 shadow-md">
              <Link to={item.url} aria-label={item.name} className="flex items-center justify-center">
                {getSocialIcon(item.name)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Link to={`/speakers/${id}`} className="speakers-content flex justify-between items-center px-10 py-5">
        <div>
          <h4 className={`text-xl font-semibold pb-1 hover:text-prim ${nameClass}`}>
            {name}
          </h4>

          <p className={`text-gray-500 ${roleClass}`}>{role}</p>
        </div>

        <div className="w-12 h-12 bg-prim p-3 rounded-full hover:bg-black">
          <img
            src="/Images/Index/Speakers/speaker-icon.svg"
            alt=""
            width={24}
            height={24}
            aria-hidden="true"
            loading="lazy"   // ← este icono no necesita carga prioritaria
          />
        </div>
      </Link>
    </div>
  )
}
export default SpeakersCard