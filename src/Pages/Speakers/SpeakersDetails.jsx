import { useMemo } from "react"
import { useParams } from "react-router-dom"
import PageHeader from "../../Components/PageHeader/PageHeader"
import speakerData from "../../Data/Speakers.json"

const sectionbanner = "/Images/section-banner.jpg"

const SpeakersDetails = () => {
  const { id } = useParams()

  const speaker = useMemo(() => 
    speakerData.find((s) => s.id === id), [id]
  )

  if (!speaker) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Speaker not found</h1>
      </div>
    )
  }

  return (
    <>
      <PageHeader 
        title="Speaker Details" 
        bgImage={sectionbanner} 
        breadcrumbTitle={speaker.name}
      />
      
      <div className="px-[2%] sm:px-[8%] lg:px-[10%] py-[8%] md:py-[12%]">
        {/* Aquí irá el contenido del detalle del speaker más adelante */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
           <div className="w-full lg:w-1/3 rounded-2xl overflow-hidden shadow-2xl">
              <img src={speaker.image} alt={speaker.name} className="w-full aspect-[3/4] object-cover" />
           </div>
           <div className="w-full lg:w-2/3">
              <span className="text-prim font-bold tracking-widest uppercase text-sm mb-4 block">Event Speaker</span>
              <h2 className="text-4xl lg:text-6xl font-bold font-unbounded text-prim-dark mb-4">{speaker.name}</h2>
              <p className="text-prim text-2xl font-medium mb-8">{speaker.role} at {speaker.company}</p>
              <p className="text-gray-500 text-xl leading-relaxed mb-10">{speaker.description}</p>
              
              <div className="h-px bg-gray-200 w-full mb-10"></div>
              
              <h4 className="text-2xl font-bold font-unbounded text-prim-dark mb-6">Expertise & Background</h4>
              <p className="text-gray-500 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
           </div>
        </div>
      </div>
    </>
  )
}

export default SpeakersDetails