import React, { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
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
  const lenis = useLenis()

  // useLayoutEffect is essential here so the scroll is reset synchronously
  // right BEFORE the new page paints, preventing any visual jumping.
  useLayoutEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }

    // A small timeout to let the page images load their basic structure
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 150)
    
    return () => clearTimeout(timeout)
  }, [location.pathname, lenis])

  return (
    <SmoothScroll>
      <Navbar />
      
      {/* Native ultra-fast routing. Removing Framer Motion eliminates layout shift chaos. */}
      <div key={location.pathname} className='animate-fade-in min-h-screen'>
        <Routes location={location}>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/schedules' element={<Schedules />} />
        </Routes>
      </div>
      
      <Footer />
      <ScrollToTop />
    </SmoothScroll>
  )
}

export default App