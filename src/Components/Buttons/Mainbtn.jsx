import styles from "../Buttons/Fancybtn.module.css"
import { twMerge } from 'tailwind-merge'

const Mainbtn = ({ text, className = "" }) => {
  return (
    <>
      <button className={twMerge(styles.btn, className)}>
        <span>{text}</span>
      </button>
    </>
  )
}

export default Mainbtn