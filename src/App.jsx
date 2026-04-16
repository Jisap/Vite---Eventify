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


// Registramos ScrollTrigger de forma global
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const location = useLocation()

  // Sincronizar ScrollTrigger al cambiar de ruta
  useEffect(() => {
    ScrollTrigger.refresh()
  }, [location])

  return (
    <SmoothScroll>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className='min-h-screen overflow-clip'
        >
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Index />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
      <ScrollToTop />
    </SmoothScroll>
  )
}

export default App