import bannerimg from "../../../assets/Images/Index/Banner/intro-video-image.jpg"
import { Icon } from "@iconify/react"

const Banner = () => {
  return (
    <>
      <div className="bg-center bg-cover bg-no-repeat py-50 lg:py-100 flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${bannerimg})`
        }}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-white/20 backdrop-blur-xs"></div>

        <div className="play-btn w-10 sm:w-20 h-10 sm:h-20 flex items-center justify-center rounded-full bg-prim text-white hover:bg-black transition-colors duration-300 cursor-pointer z-1">
          <Icon icon="solar:play-bold" width="24" height="24" />
        </div>
      </div>
    </>
  )
}

export default Banner