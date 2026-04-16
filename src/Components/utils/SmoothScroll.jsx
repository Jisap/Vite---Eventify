import { ReactLenis } from 'lenis/react'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * SmoothScroll Component
 * Integrates Lenis with GSAP ScrollTrigger for a premium scrolling experience.
 */
function SmoothScroll({ children }) {
  
  useEffect(() => {
    // Actualizar ScrollTrigger cuando Lenis haga scroll
    gsap.registerPlugin(ScrollTrigger)
    
    // Sincronizar Lenis con ScrollTrigger
    // Nota: Lenis maneja su propio rAF por defecto en la versión de React
    // pero podemos forzar la sincronización si es necesario.
  }, [])

  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.1, 
        duration: 1.5, 
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll
