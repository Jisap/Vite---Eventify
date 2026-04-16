import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './Components/Navbar/Navbar'
import Index from './Components/Index'
import SmoothScroll from './Components/utils/SmoothScroll'
import ScrollToTop from './Components/utils/ScrollToTop'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className='min-h-screen overflow-clip'
        >
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Index />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <ScrollToTop />
    </SmoothScroll>
  )
}

export default App