
import About from './Index/About/About'
import Benefits from './Index/Benefits/Benefits'
import Events from './Index/Events/Events'
import Features from './Index/Features/Features'
import Hero from './Index/Hero/Hero'
import Marquee from './Index/Marquee/Marquee'
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
      </div>
    </>
  )
}

export default Index