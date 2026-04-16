import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"



const SpeakersCard = ({
  id,
  image,
  name,
  role,
  socials = [],
  className = "",
  nameClass = "",
  roleClass = "",
  priority = false   // ← solo la primera card recibe true
}) => {
  return (
    <div className={`speakers-item bg-gray-light rounded-md relative ${className}`}>
      <div className="speakers-image p-3 relative overflow-hidden group h-90 lg:h-135 glass-effect">
        <img
          src={image}
          alt={name}
          width={400}
          height={533}
          loading={priority ? "eager" : "lazy"}        // ← lazy por defecto
          fetchPriority={priority ? "high" : "auto"}   // ← high solo para la primera
          decoding="async"                             // ← no bloquea el hilo principal
          className="w-full h-full rounded-md object-cover"
        />

        <ul className="space-y-3 absolute right-8 bottom-8 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {socials.map((item, index) => (
            <li key={index} className="text-prim bg-white hover:bg-prim hover:text-white w-fit p-2 rounded-full transition-colors duration-300">
              <Link to={item.url}>
                <Icon icon={item.icon} width="24" height="24" />
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