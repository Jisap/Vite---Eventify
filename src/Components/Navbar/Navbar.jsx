import Logo from "../../Components/Navbar/Logo/Logo";
import { useEffect, useState } from "react";
import Navmenu from "./Navmenu/Navmenu";
import Fancybtn from "../Buttons/Fancybtn";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleFancyClick = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className={`
        w-full z-20 px-[2%] sm:px-[8%] lg:px-[10%] py-4 flex justify-between items-center fixed top-0 left-0 transition-all duration-500
        ${scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200 py-3"
          : "bg-white/10 backdrop-blur-md border-b border-gray-300/20 py-4"
        }  
      `}>
        <Logo scrolled={scrolled} />

        <Navmenu
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          scrolled={scrolled}
        />

        <Fancybtn
          onFancyClick={handleFancyClick}
          toggleMenu={toggleMenu}
          scrolled={scrolled}
        />
      </div>
    </>
  )
}

export default Navbar