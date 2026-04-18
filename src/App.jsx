import React, { useEffect, useLayoutEffect } from 'react'
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
import SchedulesDetails from './Pages/Schedules/SchedulesDetails'
import Features from './Pages/Features/Features'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const location = useLocation()
  const lenis = useLenis()

  // El efecto de layout effect ya no es necesario si usamos AnimatePresence onExitComplete
  // que garantiza que el scroll se resetee justo despues de destruir la antigua pagina.
  useEffect(() => {
    const refreshTrigger = () => ScrollTrigger.refresh()
    const timeout = setTimeout(refreshTrigger, 500) // tiempo extra para estabilizar
    return () => clearTimeout(timeout)
  }, [location.pathname])

  return (
    <SmoothScroll>
      <Navbar />

      {/* 
        Hemos envuelto la aplicacion en bg-prim-dark. 
        Asi, cuando la opacidad baja a 0 en la transicion, NO se ve un fondo blanco cegador,
        sino que fusiona con los PageHeaders oscuros de las demas paginas logrando un "Premium Fade".
      */}
      <div className="bg-prim-dark min-h-screen">
        <AnimatePresence
          mode="wait"
          onExitComplete={() => {
            if (lenis) lenis.scrollTo(0, { immediate: true })
            else window.scrollTo(0, 0)
          }}
        >
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className='min-h-screen relative bg-white'
          >
            <Routes location={location}>
              <Route path='/' element={<Index />} />
              <Route path='/about' element={<About />} />
              <Route path='/schedules' element={<Schedules />} />
              <Route path='/schedules/:id' element={<SchedulesDetails />} />
              <Route path='/features' element={<Features />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
      <ScrollToTop />
    </SmoothScroll>
  )
}

export default App