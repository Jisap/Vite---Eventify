import React from 'react'
import PageHeader from '../../Components/PageHeader/PageHeader'
import SpeakersCard from '../../Components/SpeakersCard/SpeakersCard'
import speakerData from "../../Data/Speakers.json"
import Highlights from "../../Components/Index/Highlights/Highlights"
import Faqs from "../../Components/Index/Faqs/Faqs"

const sectionbanner = "/Images/section-banner.jpg"

const Speakers = () => {
  return (
    <>
      <PageHeader title="Our Speakers" bgImage={sectionbanner} />

      <div className='px-[2%] sm:px-[8%] lg:px-[10%] py-[10%] md:py-[12%] xl:py-[8%]'>
        <div className="mb-16 text-center lg:text-left animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold font-unbounded text-prim-dark mb-6">
            Expert speakers <br /> <span className="text-prim">sharing insights</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Connect with global industry leaders and visionaries who are shaping the future of technology and innovation through engaging sessions and workshops.
          </p>
        </div>

        <div className="speakers-wrap grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-10">
          {speakerData.map((item, index) => {
            return (
              <SpeakersCard
                key={item.id}          // ← usar id estable en lugar de index
                priority={index === 0} // ← solo la primera card carga en eager
                {...item}
              />
            )
          })}
        </div>
      </div>

      <Highlights />
      <Faqs />
    </>
  )
}

export default Speakers