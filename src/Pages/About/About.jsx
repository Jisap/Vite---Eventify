import { Link } from "react-router-dom"

import AboutComponent from "../../Components/Index/About/About"
import Mainbtn from "../../Components/Buttons/Mainbtn"
import CountUp from "react-countup"
import PageHeader from "../../Components/PageHeader/PageHeader"


const approachbg = "/Images/bg-image.png"
const sectionbanner = "/Images/section-banner.jpg"
const MarqueeIcon = "/Images/Index/About/icon-marquee.svg"

const achievementIcon1 = "/Images/AboutPage/achievement-icon1.svg"
const achievementIcon2 = "/Images/AboutPage/achievement-icon2.svg"

const achievementsImg = "/Images/AboutPage/our-achievements-image.jpg"
const OurApproachImg01 = "/Images/AboutPage/our-approach-img01.jpg"
const OurApproachImg02 = "/Images/AboutPage/our-approach-img02.jpg"
const OurApproachImg03 = "/Images/AboutPage/our-approach-img03.jpg"

const featurIcon1 = "/Images/Index/Features/feature-icon1.svg"
const featurIcon2 = "/Images/Index/Features/features-icon2.svg"
const featurIcon3 = "/Images/Index/Features/features-icon3.svg"
const featurIcon4 = "/Images/Index/Features/features-icon4.svg"


const achivevementData = [
  {
    icon: achievementIcon1,
    number: 500,
    suffix: "+",
    label: "Gloval Events Delivered"
  },
  {
    icon: achievementIcon2,
    number: 100,
    suffix: "K+",
    label: "Attendees Connect Worldwide"
  },
  {
    icon: featurIcon3,
    number: 150,
    suffix: "+",
    label: "Industry-Leading Speakers"
  },
  {
    icon: featurIcon4,
    number: 80,
    suffix: "+",
    label: "Countries Represented"
  }
];

const approachData = [
  {
    img: OurApproachImg01,
    icon: featurIcon1,
    title: "Seamless Execution",
    desc: "Seamless execution ensures every step of process flows smoothly, minimizing disruptions."
  },
  {
    img: OurApproachImg02,
    icon: featurIcon2,
    title: "Collaborative Planning",
    desc: "Collaborative planning ensures every step of process flows smoothly, minimizing disruptions."
  },
  {
    img: OurApproachImg03,
    icon: featurIcon4,
    title: "Immersive Experiences",
    desc: "Immersive experiences ensures every step of process flows smoothly, minimizing disruptions."
  },
];


const About = () => {
  return (
    <>
      <PageHeader title="About Us" bgImage={sectionbanner} />

      <AboutComponent />

      <div className='approach px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] bg-prim-dark relative'>
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={approachbg}
            alt="approach-bg"
            className="w-full h-full"
          />
        </div>

        <div className="approach-content max-w-full text-center mx-auto lg:max-w-210 z-1 relative">
          <span className="flex items-center bg-prim w-fit mx-auto rounded-full text-white pe-3 text-sm md:text-md font-medium mb-3">
            <img src={MarqueeIcon} alt="marquee-icon" className="p-2 w-7 h-7 md:w-8 md:h-8" />
            Our Approach
          </span>

          <h2 className="text-2xl sm:text-4xl ms:text-5xl font-bold mb-4 text-white">
            Our Approach Our unique approach to successful event managenment
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">

        </div>
      </div>
    </>
  )
}

export default About