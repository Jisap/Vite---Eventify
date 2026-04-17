import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './Components/Navbar/Navbar'
import Index from './Components/Index'
import SmoothScroll from './Components/utils/SmoothScroll'
import ScrollToTop from './Components/utils/ScrollToTop'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import { useLenis } from 'lenis/react'
import Schedules from './Pages/Schedules/Schedules'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const location = useLocation()
  const lenis = useLenis()                   // Obtén la instancia de Lenis

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true }) // Reset instantáneo al cambiar ruta
    }

    const timeout = setTimeout(() => {       // Espera a que Framer Motion termine su animación de entrada
      ScrollTrigger.refresh()
    }, 350)                                  // un poco más que la duración de la transición (300ms)

    return () => clearTimeout(timeout)
  }, [location, lenis])

  return (
    <SmoothScroll>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "linear" }}
          className='min-h-screen'
        >
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Index />} />
            <Route path='/about' element={<About />} />
            <Route path='/schedules' element={<Schedules />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
      <ScrollToTop />
    </SmoothScroll>
  )
}

export default App