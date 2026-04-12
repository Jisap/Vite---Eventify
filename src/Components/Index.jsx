
import About from './Index/About/About'
import Benefits from './Index/Benefits/Benefits'
import Events from './Index/Events/Events'
import Features from './Index/Features/Features'
import Hero from './Index/Hero/Hero'
import Marquee from './Index/Marquee/Marquee'

const Index = () => {
  return (
    <>
      <div className='h-[5000px]'>
        <Hero />
        <Marquee />
        <About />
        <Features />
        <Benefits />
        <Events />
      </div>
    </>
  )
}

export default Index