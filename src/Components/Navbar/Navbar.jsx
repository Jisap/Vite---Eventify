import Logo from "../../Components/Navbar/Logo/Logo";
import { useEffect, useState } from "react";
import Navmenu from "./Navmenu/Navmenu";

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
        w-full z-20 px-[2%] sm:px-[8%] lg:px-[10%] py-4 flex justify-between items-center fixed top-0 left-0 transition-all duration-300
        ${scrolled
          ? "bg-black shadow-md border-b border-gray-50/20"
          : "bg-white bg-opacity-20 backdrop-blur-md border-b border-gray-300/20"
        }  
      `}>
        <Logo />

        <Navmenu
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
        />
      </div>
    </>
  )
}

export default Navbar