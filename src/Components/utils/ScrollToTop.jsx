import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";
import { useState } from "react"

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // useLenis hook is incredibly fast compared to window.addEventListener
  // because it runs on the rAF (requestAnimationFrame) loop.
  const lenis = useLenis(({ scroll }) => {
    if (scroll > 300 !== visible) {
      setVisible(scroll > 300);
    }
  }, [visible])

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { 
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-[999] bg-white text-prim p-3 rounded-full shadow-xl hover:shadow-prim/30 hover:bg-prim transition-all duration-300 hover:text-white cursor-pointer ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <ArrowUp size={24} />
    </button>
  )
}

export default ScrollToTop