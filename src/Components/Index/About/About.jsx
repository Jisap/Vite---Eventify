import { Icon } from "@iconify/react"
import { Link, Links } from "react-router-dom"
import { useState } from "react"
import Circletext from "../../Circletext/Circletext"
import Mainbtn from "../../Buttons/Mainbtn"



const AboutComponent = () => {

  const [active, setActive] = useState("mission")

  return (
    <>
      <div className='about px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] flex items-center justify-between flex-col lg:flex-row lg:gap-20'>
        <div className='about-image lg:w-1/2 w-full relative'>
          <div className='glass-effect relative overflow-hidden rounded-xl'>
            <img src="/Images/Index/About/about-us-image.jpg" alt="about-image" className="w-full rounded-xl" />
          </div>

          <div className="achievement bg-white shadow-xl max-w-90 rounded-xl text-center ms-auto absolute top-70 -right-15 md:block hidden">
            <div className="achievement-content w-full text-center mb-8 px-5 pt-6">
              <img
                src="/Images/Index/About/about-achievement-image.png"
                alt="achievement-image"
                className="w-45 h-45 object-contain mx-auto mb-10 pt-5"
              />

              <h3 className="font-semibold text-lg">
                "Institute for Professional Achievement Awards 2025"
              </h3>

              <p className="text-gray-500 font-medium">
                by-Nisha Trivedi
              </p>
            </div>

            <h3 className="bg-gray-light py-6 font-semibold text-2xl px-5">
              Celbrating Achievement with Pride
            </h3>
          </div>

          <div className="flex justify-center md:justify-start mt-10 md:mt-0">
            <Circletext />
          </div>
        </div>

        <div className="about-content lg:w-1/2 w-full">
          <span className="flex items-center bg-prim w-fit rounded-full text-white pe-3 text-sm md:text-md font-medium mb-3">
            <img src="/Images/Index/About/icon-marquee.svg" alt="marquee-icon" className="p-2 w-7 h-7 md:w-8 md:h-8" />
            About Us
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
            Uncover our mission & purpose behind this event
          </h2>

          <p className="text-gray-500 text-sm md:text-xl">
            Discover the vision that drives this event-a commitment to bringing together innovators, leaders, amd changemakers
            to share knowledge, spark inspiration, and create meaninful connections.
          </p>

          <ul className="flex justify-between items-center flex-col md:flex-row bg-gray-light mt-5 rounded-lg gap-3 p-3">
            <li className="w-full">
              <button
                onClick={() => setActive("mission")}
                className={`
                  w-full p-3 rounded-lg text-center font-bold cursor-pointer
                  ${active === "mission" ? "bg-black text-white" : "bg-white"}
                `}
              >
                Our Mission
              </button>
            </li>

            <li className="w-full">
              <button
                onClick={() => setActive("vision")}
                className={`
                  w-full p-3 rounded-lg text-center font-bold cursor-pointer
                  ${active === "vision" ? "bg-black text-white" : "bg-white"}
                `}
              >
                Our Vision
              </button>
            </li>

            <li className="w-full">
              <button
                onClick={() => setActive("goal")}
                className={`
                  w-full p-3 rounded-lg text-center font-bold cursor-pointer
                  ${active === "goal" ? "bg-black text-white" : "bg-white"}
                `}
              >
                Our Goal
              </button>
            </li>
          </ul>

          {active === "mission" && (
            <p className="my-5 text-gray-500 text-sm md:text-xl">
              Our mission is to build a global community where collaboration fuels innovation,
              we aim encourage fresh thinking, spark inspiring dialogues, and create a space.
            </p>
          )}

          {active === "vision" && (
            <p className="my-5 text-gray-500 text-sm md:text-xl">
              Our vision is to create a world where ideas have no boundaries,
              where creativity thrives, and where everyone feels empowered to share their unique
              perspective.
            </p>
          )}

          {active === "goal" && (
            <p className="my-5 text-gray-500 text-sm md:text-xl">
              Our goal is to bring together the brightest minds from diverse backgrounds,
              foster meaningful connections, and inspire action that creates a lasting impact.
            </p>
          )}

          <ul className="flex items-center flex-wrap gap-5 border-b border-gray-100 pb-5 lg:pb-10">
            <li className="flex items-center gap-3">
              <img
                src="/Images/Index/About/about-icon1.svg"
                alt="about-icon1"
                className="w-10 h-10 bg-prim p-2 rounded-lg cursor-pointer"
              />

              <h3 className="text-md sm:text-xl font-semibold">
                Receive real-time event updates.
              </h3>
            </li>

            <li className="flex items-center gap-3">
              <img
                src="/Images/Index/About/about-icon2.svg"
                alt="about-icon2"
                className="w-10 h-10 bg-prim p-2 rounded-lg cursor-pointer"
              />

              <h3 className="text-md sm:text-xl font-semibold">
                Network with industry leaders.
              </h3>
            </li>
          </ul>

          <div className="flex items-center flex-wrap gap-10 mt-8 lg:mt-10">
            <Link to="/about">
              <Mainbtn text="Learn More About" />
            </Link>

            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <Icon
                icon="material-symbols:call"
                width="24"
                height="24"
                className="bg-prim text-white w-10 h-10 p-2"
              />

              <p className="text-gray-500">
                <span className="block text-black">Call Now!</span>
                ++ 123 456 7890
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutComponent