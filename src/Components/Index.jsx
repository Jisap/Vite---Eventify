
import About from './Index/About/About'
import Hero from './Index/Hero/Hero'
import Marquee from './Index/Marquee/Marquee'

const Index = () => {
  return (
    <>
      <div className='h-[5000px]'>
        <Hero />
        <Marquee />
        <About />
      </div>
    </>
  )
}

export default Index