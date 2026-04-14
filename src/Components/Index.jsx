
import About from './Index/About/About'
import Banner from './Index/Banner/Banner'
import Benefits from './Index/Benefits/Benefits'
import Events from './Index/Events/Events'
import Features from './Index/Features/Features'
import Hero from './Index/Hero/Hero'
import Highlights from './Index/Highlights/Highlights'
import Marquee from './Index/Marquee/Marquee'
import Pricing from './Index/Pricing/Pricing'
import Speakers from './Index/Speakers/Speakers'

const Index = () => {
  return (
    <>
      <div>
        <Hero />
        <Marquee />
        <About />
        <Features />
        <Benefits />
        <Events />
        <Speakers />
        <Highlights />
        <Pricing />
        <Banner />
      </div>
    </>
  )
}

export default Index