
import About from './Index/About/About'
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
      </div>
    </>
  )
}

export default Index