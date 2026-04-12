
import { Icon } from "@iconify/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect, useState } from "react"





const ScrollToTop = () => {

  const [visible, setVisible] = useState();

  const toggleVisibility = () => {
    window.scrollY > 300 ? setVisible(true) : setVisible(false);
  }

  const scrollToTop = () => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(0, true);
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