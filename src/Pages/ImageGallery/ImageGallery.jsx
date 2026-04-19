import { useRef, useState, useEffect } from 'react'
import PageHeader from '../../Components/PageHeader/PageHeader'
import { Icon } from '@iconify/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const galleryData = [
  { id: 1, image: "/Images/ImageGalleryPage/gallery-01.jpg", category: "workshops", title: "Creative Design Thinking" },
  { id: 2, image: "/Images/ImageGalleryPage/gallery-02.jpg", category: "keynotes", title: "Global Tech Summit 2026" },
  { id: 3, image: "/Images/ImageGalleryPage/gallery-03.jpg", category: "networking", title: "Evening Networking Mixer" },
  { id: 4, image: "/Images/ImageGalleryPage/gallery-04.jpg", category: "workshops", title: "Advanced React Mastery" },
  { id: 5, image: "/Images/ImageGalleryPage/gallery-05.jpg", category: "keynotes", title: "Sustainable Tech Future" },
  { id: 6, image: "/Images/ImageGalleryPage/gallery-06.jpg", category: "networking", title: "Founder's Dinner Gala" },
  { id: 7, image: "/Images/ImageGalleryPage/gallery-07.jpg", category: "workshops", title: "UI/UX Design Workflow" },
  { id: 8, image: "/Images/ImageGalleryPage/gallery-08.jpg", category: "keynotes", title: "AI Revolution Keynote" },
  { id: 9, image: "/Images/ImageGalleryPage/gallery-09.jpg", category: "networking", title: "Community Coffee Break" },
]

const sectionbanner = "/Images/section-banner.jpg"

const ImageGallery = () => {
  const [filter, setFilter] = useState("all")
  const [selectedImg, setSelectedImg] = useState(null)
  const galleryRef = useRef(null)

  const filteredData = filter === "all" ? galleryData : galleryData.filter(item => item.category === filter)

  useEffect(() => {
    const items = galleryRef.current.querySelectorAll('.gallery-item')
    
    gsap.fromTo(items, 
      { opacity: 0, scale: 0.8, y: 30 },
      { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: "back.out(1.2)",
        overwrite: true 
      }
    )
  }, [filter])

  return (
    <div className="bg-white min-h-screen pb-20">
      <PageHeader 
        title="Visual Memories" 
        breadcrumbTitle="Gallery" 
        bgImage={sectionbanner} 
        category="Events Experience"
      />

      <div className='px-[5%] lg:px-[10%] py-20'>
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {["all", "workshops", "keynotes", "networking"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-lg ${
                filter === cat 
                ? 'bg-prim text-white shadow-prim/30 scale-105' 
                : 'bg-gray-100 text-gray-500 hover:bg-prim hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div 
          ref={galleryRef}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {filteredData.map((gallery) => (
            <div 
              key={gallery.id} 
              className='gallery-item group relative h-[400px] overflow-hidden rounded-[2.5rem] shadow-xl cursor-pointer'
              onClick={() => setSelectedImg(gallery)}
            >
              <img 
                src={gallery.image} 
                alt={gallery.title} 
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' 
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-prim-dark/90 via-prim-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <span className="text-prim text-xs font-bold uppercase tracking-widest mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {gallery.category}
                </span>
                <h4 className="text-white text-2xl font-bold font-unbounded transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  {gallery.title}
                </h4>
                
                <div className="absolute top-8 right-8 w-12 h-12 bg-prim rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-300 shadow-xl">
                  <Icon icon="ri:fullscreen-line" width="24" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-prim-dark/95 backdrop-blur-xl flex items-center justify-center p-5 lg:p-20"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-10 right-10 text-white hover:text-prim transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <Icon icon="ri:close-line" width="48" />
          </button>
          
          <div className="relative max-w-6xl w-full max-h-full flex flex-col items-center">
            <img 
              src={selectedImg.image} 
              alt={selectedImg.title} 
              className="max-w-full max-h-[80vh] object-contain rounded-3xl shadow-2xl animate-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-8 text-center text-white" onClick={(e) => e.stopPropagation()}>
              <span className="text-prim text-sm font-bold uppercase tracking-[0.3em] block mb-2">{selectedImg.category}</span>
              <h3 className="text-2xl lg:text-4xl font-bold font-unbounded">{selectedImg.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGallery