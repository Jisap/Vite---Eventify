import { Icon } from "@iconify/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { gsap } from "gsap";
import { useEffect, useState } from "react"

const ScrollToTop = () => {

  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    window.scrollY > 300 ? setVisible(true) : setVisible(false);
  }

  const scrollToTop = () => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      // Animar scrollTop del smoother directamente con GSAP
      gsap.to(smoother, {
        scrollTop: 0,
        duration: 1.2,
        ease: "power3.inOut",
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
          className="fixed bottom-5 right-5 bg-primary text-prim p-3 rounded-sm shadow-lg hover:bg-gray-200 transition-all duration-300 hover:text-black cursor-pointer"
        >
          <Icon icon="lucide:move-up" width="24" height="24" />
        </button>
      )}
    </>
  )
}

export default ScrollToTop