import { Icon } from "@iconify/react";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react"

const ScrollToTop = () => {

  const [visible, setVisible] = useState(false);
  const lenis = useLenis()

  const toggleVisibility = () => {
    window.scrollY > 300 ? setVisible(true) : setVisible(false);
  }

  const scrollToTop = () => {
    if (lenis) {
      // Lenis scrollTo provee una animación premium por defecto
      lenis.scrollTo(0, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Easing suave
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [])

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-[999] bg-primary text-prim p-3 rounded-sm shadow-lg hover:bg-gray-200 transition-all duration-300 hover:text-black cursor-pointer"
        >
          <Icon icon="lucide:move-up" width="24" height="24" />
        </button>
      )}
    </>
  )
}

export default ScrollToTop