import { Icon } from '@iconify/react'
import styles from '../Buttons/Fancybtn.module.css'

const Fancybtn = ({ toggleMenu }) => {
  return (
    <>
      <div className='flex items-center gap-5'>
        <button className={`
          ${styles.btn} ${styles.Fancybtn} lg:hidden border! border-gray-50/20
        `}>
          <span>
            Join The Conference
          </span>
        </button>

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