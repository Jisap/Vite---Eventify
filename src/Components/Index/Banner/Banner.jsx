import bannerimg from "../../../assets/Images/Index/Banner/intro-video-image.jpg"
import { Icon } from "@iconify/react"

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="bg-center bg-cover bg-no-repeat min-h-[60vh] md:min-h-[80vh] flex items-center justify-center relative group"
        style={{
          backgroundImage: `url(${bannerimg})`
        }}
      >
        {/* Hierarchical Overlay System */}
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-prim-dark/10 to-prim-dark/80 z-[2]" />
        
        {/* Content Container */}
        <div className="banner-content text-center relative z-10 px-6 max-w-5xl pt-12">
          <div className="inline-flex items-center gap-2 bg-prim/15 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full text-white text-sm font-semibold mb-10 shadow-xl shadow-black/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-prim opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-prim"></span>
            </span>
            Official Event Aftermovie
          </div>

          <h2 className="text-white text-4xl md:text-6xl lg:text-8xl font-black mb-10 leading-[1.1] font-unbounded drop-shadow-2xl animate-fade-in-up">
            RELIVE THE <span className="text-prim drop-shadow-[0_0_15px_rgba(0,139,255,0.4)]">ENERGY</span>
          </h2>

          <div className="flex flex-col items-center gap-8 animate-fade-in-up [animation-delay:200ms]">
            <div className="play-btn-wrapper relative group/play cursor-pointer">
              {/* Spinning rings effect (Decorative) */}
              <div className="absolute inset-0 rounded-full border border-prim/30 animate-[spin_10s_linear_infinite] scale-150 opacity-0 group-hover/play:opacity-100 transition-opacity"></div>
              
              <div className="play-btn w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-prim text-white hover:bg-white hover:text-prim transition-all duration-700 shadow-[0_0_50px_rgba(0,139,255,0.4)] relative overflow-hidden group-hover/play:scale-110">
                <span className="absolute inset-0 bg-white translate-y-full group-hover/play:translate-y-0 transition-transform duration-500 rounded-full" />
                <Icon 
                  icon="solar:play-bold" 
                  className="w-10 h-10 md:w-14 md:h-14 relative z-10 translate-x-1 transition-transform group-hover/play:scale-110" 
                />
              </div>
            </div>

            <p className="text-white/60 text-base md:text-lg font-medium max-w-lg mx-auto leading-relaxed border-t border-white/10 pt-8 mt-4">
              Step inside the most influential tech gathering of the continent. 
              The future was written here.
            </p>
          </div>
        </div>

        {/* Bottom Transition Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-[11]" />
      </div>
    </section>
  )
}

export default Banner