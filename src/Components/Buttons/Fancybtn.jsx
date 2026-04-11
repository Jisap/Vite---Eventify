import { Icon } from '@iconify/react'
import styles from '../Buttons/Fancybtn.module.css'
import { Link } from 'react-router-dom'

const Fancybtn = ({ toggleMenu, onFancyClick }) => {
  return (
    <>
      <div className='flex items-center gap-5'>
        {/* Boton para unirse a la conferencia: link to contact. Solo se ve en desktop (css modules)*/}
        <Link to="/contact">
          <button
            onClick={onFancyClick}
            className={`
            ${styles.btn} ${styles.Fancybtn} border! border-gray-50/20!
          `}>
            <span>
              Join The Conference
            </span>
          </button>
        </Link>

        {/* Icono para abrir el menu en movil */}
        <div
          onClick={toggleMenu}
          className='menu-open bg-prim text-white p-1 cursor-pointer lg:hidden block'
        >
          <Icon
            icon="material-symbols-light:menu-rounded"
            width="24"
            height="24"
          />
        </div>
      </div>
    </>
  )
}

export default Fancybtn