import circletextimg from "../../assets/Images/Index/About/circle-text.webp"
import textcss from "../Circletext/Circletext.module.css"

const Circletext = () => {
  return (
    <>
      <div className='relative w-50 h-50 md:h-62.5 md:w-62.5 flex items-center justify-center'>
        <img
          src={circletextimg}
          alt="circle-text"
          className={`absolute inset-0 w-full h-full object-cover ${textcss.imgrotate}`}
        />

        <span className="relative z-10 flex items-center justify-center rounded-full bg-white text-black text-4xl font-unbounded font-semibold">
          25+
        </span>
      </div>
    </>
  )
}

export default Circletext