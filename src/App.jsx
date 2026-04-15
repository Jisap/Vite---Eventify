import React, { useRef, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Index from './Components/Index'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import ScrollToTop from './Components/utils/ScrollToTop'

const App = () => {

  const smootherWrapperRef = useRef(null)
  const smootherContentRef = useRef(null)
  const smoother = useRef(null)
  const location = useLocation()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    smoother.current = ScrollSmoother.create({
      wrapper: smootherWrapperRef.current,
      content: smootherContentRef.current,
      smooth: 1,
      effects: true,
      normalizeScroll: true,   // Evita conflictos con eventos de scroll nativos
      ignoreMobileResize: true, // Evita recálculos innecesarios en móvil
    })

    return () => {
      smoother.current && smoother.current.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  // Resetear scroll y refrescar triggers al cambiar de página
  useEffect(() => {
    if (smoother.current) {
      smoother.current.scrollTop(0)
      ScrollTrigger.refresh()
    } else {
      window.scrollTo(0, 0)
      ScrollTrigger.refresh()
    }
  }, [location])

  return (
    <>
      <Navbar />
      <div id="smooth-wrapper" ref={smootherWrapperRef}>
        <div id="smooth-content" ref={smootherContentRef}>
          <div className='min-h-screen overflow-clip'>
            <Routes>
              <Route path='/' element={<Index />} />
            </Routes>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  )
}

export default App