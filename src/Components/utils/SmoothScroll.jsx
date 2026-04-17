import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * SmoothScroll Component
 * Integrates Lenis with GSAP ScrollTrigger for a premium scrolling experience.
 */
function SmoothScroll({ children }) {
  const lenisRef = useRef()
  
  useEffect(() => {
    // Sincronización absoluta entre el motor de Lenis y la capa de pintado de GSAP.
    // Esto previene que los elementos "tiemblen" o se sientan lentos.
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0) // Desactivamos el suavizado de retardo para no romper el scroll instintivo
  
    return () => {
      gsap.ticker.remove(update)
    }
  }, [])

  return (
    <ReactLenis 
      root 
      ref={lenisRef}
      autoRaf={false} // GSAP maneja el RAF ahora, no Lenis por defecto
      options={{ 
        lerp: 0.1, 
        duration: 1.2, 
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll
