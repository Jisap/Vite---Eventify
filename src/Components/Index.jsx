
import About from './Index/About/About'
import Banner from './Index/Banner/Banner'
import Benefits from './Index/Benefits/Benefits'
import Blogs from './Index/Blogs/Blogs'
import Events from './Index/Events/Events'
import Faqs from './Index/Faqs/Faqs'
import Features from './Index/Features/Features'
import Hero from './Index/Hero/Hero'
import Highlights from './Index/Highlights/Highlights'
import Marquee from './Index/Marquee/Marquee'
import Pricing from './Index/Pricing/Pricing'
import Speakers from './Index/Speakers/Speakers'
import Testimonials from './Index/Testimonials/Testimonials'

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
        <Faqs />
        <Testimonials />
        <Blogs />
      </div>
    </>
  )
}

export default Index