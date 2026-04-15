// import bannerimg from "../../../assets/Images/Index/Banner/intro-video-image.jpg"
// import { Icon } from "@iconify/react"

// const Banner = () => {
//   return (
//     <section className="relative overflow-hidden">
//       <div
//         className="bg-center bg-cover bg-no-repeat min-h-[60vh] md:min-h-[75vh] flex items-center justify-center relative group"
//         style={{ backgroundImage: `url(${bannerimg})` }}
//       >
//         {/* Overlay — more subtle than before */}
//         <div className="absolute inset-0 bg-prim-dark/40 z-[1]" />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-prim-dark/70 z-[2]" />

//         {/* Content */}
//         <div className="banner-content text-center relative z-10 px-6 max-w-3xl flex flex-col items-center gap-8">
//           {/* Kicker */}
//           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full text-white/80 text-xs font-medium shadow-lg shadow-black/10">
//             <span className="relative flex h-1.5 w-1.5">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-prim opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-prim"></span>
//             </span>
//             Official Event Aftermovie
//           </div>

//           {/* Heading — calm, refined */}
//           <div className="space-y-2 animate-fade-in-up">
//             <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug tracking-wide">
//               Relive the moments that{" "}
//               <span className="text-prim">defined the future</span>
//             </h2>
//             <p className="text-white/50 text-sm md:text-base font-normal max-w-md mx-auto leading-relaxed">
//               Step inside the most influential tech gathering of the continent.
//             </p>
//           </div>

//           {/* Play Button — unchanged */}
//           <div className="play-btn-wrapper relative group/play cursor-pointer animate-fade-in-up [animation-delay:200ms]">
//             {/* Spinning ring */}
//             <div className="absolute inset-0 rounded-full border border-prim/30 animate-[spin_10s_linear_infinite] scale-150 opacity-0 group-hover/play:opacity-100 transition-opacity"></div>

//             <div className="play-btn w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-prim text-white hover:bg-white hover:text-prim transition-all duration-700 shadow-[0_0_50px_rgba(0,139,255,0.4)] relative overflow-hidden group-hover/play:scale-110">
//               <span className="absolute inset-0 bg-white translate-y-full group-hover/play:translate-y-0 transition-transform duration-500 rounded-full" />
//               <Icon
//                 icon="solar:play-bold"
//                 className="w-10 h-10 md:w-14 md:h-14 relative z-10 translate-x-1 transition-transform group-hover/play:scale-110"
//               />
//             </div>
//           </div>

//           {/* Watch label */}
//           <span className="text-white/40 text-xs tracking-widest uppercase animate-fade-in-up [animation-delay:350ms]">
//             Watch the aftermovie
//           </span>
//         </div>

//         {/* Bottom fade */}
//         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-[11]" />
//       </div>
//     </section>
//   )
// }

// export default Banner


import { useEffect, useRef } from "react"
import { Icon } from "@iconify/react"
import gsap from "gsap"

const Banner = ({
  image,
  title,
  subtitle,
  label = "Official Event Aftermovie",
  onPlay,
}) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".banner-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
      })

      gsap.from(".play-btn", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "back.out(1.7)",
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      <div className="relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-center group">

        {/* Background Image */}
        <img
          src={image}
          alt="Event aftermovie preview"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-2000 ease-out group-hover:scale-105"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-prim-dark/40 z-1" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-prim-dark/70 z-2" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2),rgba(0,0,0,0.7))] z-3" />

        {/* Content */}
        <div className="relative z-10 px-6 max-w-3xl flex flex-col items-center gap-8 text-center">

          {/* Label */}
          <div className="banner-item inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full text-white/80 text-xs font-medium shadow-lg shadow-black/10">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-prim opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-prim"></span>
            </span>
            {label}
          </div>

          {/* Heading */}
          <div className="banner-item space-y-3">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              {title}
            </h2>
            <p className="text-white/60 text-sm md:text-base max-w-md mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Play Button */}
          <div className="banner-item flex flex-col items-center gap-3">
            <button
              onClick={onPlay}
              aria-label="Play aftermovie"
              className="play-btn relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-prim text-white overflow-hidden transition-all duration-500 group/play hover:scale-110 hover:text-prim"
            >
              {/* Glow */}
              <span className="absolute inset-0 rounded-full animate-[pulseGlow_3s_ease-in-out_infinite] group-hover/play:opacity-0 transition-opacity duration-500" />

              {/* Hover background */}
              <span className="absolute inset-0 bg-white translate-y-full group-hover/play:translate-y-0 transition-transform duration-500 rounded-full z-0" />

              {/* Icon */}
              <Icon
                icon="solar:play-bold"
                className="w-10 h-10 md:w-14 md:h-14 relative z-10 translate-x-1 transition-all duration-300 group-hover/play:scale-110"
                aria-hidden="true"
              />
            </button>

            <span className="text-white/50 text-xs tracking-widest uppercase">
              Watch Aftermovie
            </span>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-11" />
      </div>
    </section>
  )
}

export default Banner