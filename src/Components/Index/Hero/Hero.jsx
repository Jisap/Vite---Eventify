import { Icon } from "@iconify/react"
import author1 from "../../../assets/Images/Index/Hero/author-1.jpg"
import author2 from "../../../assets/Images/Index/Hero/author-2.jpg"
import author3 from "../../../assets/Images/Index/Hero/author-3.jpg"
import Mainbtn from "../../Buttons/Mainbtn"
import { Link } from "react-router-dom"




const Hero = () => {
  return (
    <>
      <div className='hero-bg h-screen w-full px-[2%] sm:px-[8%] lg:px-[10%]'>
        <div className='hero-content lg:max-w-6xl mx-auto text-center h-full flex flex-col justify-center items-center z-10 relative'>
          <div className='flex items-center px-2 py-1 rounded-full bg-white/20 backdrop-blur-md text-white mb-3'>
            <div className="flex items-center authro-images">
              <img
                src={author1}
                alt=""
                className="h-5 w-5 lg:w-6 lg:h-6 rounded-full border border-white"
              />

              <img
                src={author2}
                alt=""
                className="h-5 w-5 lg:w-6 lg:h-6 -translate-x-2 rounded-full border border-white"
              />

              <img
                src={author3}
                alt=""
                className="h-5 w-5 lg:w-6 lg:h-6 -translate-x-3 rounded-full border border-white"
              />
            </div>

            <p className="text-sm lg:text-md">
              Ideas that spark changes.
            </p>
          </div>

          <h1 className="text-2xl sm:text-3xl mb-4 lg:mb-6 md:text-5xl xl:text-7xl text-white font-bold text-center">
            Connecting Minds to Shape Tomorrow's Big Ideas
          </h1>

          <p className="text-white lg:text-xl py-2 mb-5">
            Experience a powerful gathering of visionaries, creators, and industry experts united
            by one goal-exhanging ideas that spark growth, innovation, and meaningful change.
          </p>

          <div className="flex items-center lg:flex-row flex-col gap-5">
            <Link to="/schedules">
              <Mainbtn text="Explore Schedule" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero