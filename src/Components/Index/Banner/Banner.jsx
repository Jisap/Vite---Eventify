
import { useLayoutEffect, useRef } from "react"
import { Icon } from "@iconify/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const Banner = ({
  image,
  title,
  subtitle,
  label = "Official Event Aftermovie",
  onPlay,
  bottomFade = true,
  bottomFadeColor = "white",
}) => {
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".banner-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
        }
      })

      gsap.from(".play-btn", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
        }
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

        {/* Bottom fade — opcional */}
        {bottomFade && (
          <div
            className="absolute bottom-0 left-0 w-full h-32 z-11"
            style={{
              background: `linear-gradient(to top, ${bottomFadeColor}, transparent)`,
            }}
          />
        )}
      </div>
    </section>
  )
}

export default Banner