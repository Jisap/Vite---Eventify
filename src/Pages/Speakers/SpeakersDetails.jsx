import { useMemo } from "react"
import { useParams, Link } from "react-router-dom"
import PageHeader from "../../Components/PageHeader/PageHeader"
import speakerData from "../../Data/Speakers.json"
import { Calendar, Languages, Share2, MapPin, UserX, Mail, Phone } from "lucide-react"
import { getSocialIcon } from "../../Components/SpeakersCard/SpeakersCard"

const sectionbanner = "/Images/section-banner.jpg"
const SpeakerIconDefault = "/Images/Index/Speakers/speaker-icon.svg"

const SpeakersDetails = () => {
  const { id } = useParams()

  const speaker = useMemo(() =>
    speakerData.find((s) => s.id === id), [id]
  )

  if (!speaker) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="text-center">
          <UserX className="text-gray-300 w-24 h-24 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-prim-dark mb-4">Speaker not found</h1>
          <Link to="/speakers" className="text-prim hover:underline font-medium">Back to All Speakers</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <PageHeader
        title="Speaker Profile"
        bgImage={sectionbanner}
        breadcrumbTitle={speaker.name}
      />

      <div className="px-[5%] lg:px-[10%] py-[8%] md:py-[10%]">
        <div className="max-w-7xl mx-auto">
          {/* Top Profile Section */}
          <div className="flex flex-col xl:flex-row gap-16 items-start mb-24">
            {/* Left: Interactive Image & Socials */}
            <div className="w-full xl:w-1/3 group">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] mb-8 transform transition-transform duration-700 hover:scale-[1.02]">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full aspect-4/5 object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-prim-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white text-sm font-medium tracking-widest uppercase">Expert in {speaker.expertise?.[0] || 'Technology'}</p>
                </div>
              </div>

              <div className="bg-gray-light p-8 rounded-2xl border border-gray-100">
                <h5 className="text-prim-dark font-bold text-lg mb-6 flex items-center gap-2">
                  <Share2 className="text-prim" size={20} />
                  Connect with {speaker.name.split(' ')[0]}
                </h5>

                <div className="flex gap-4">
                  {speaker.socials?.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-prim-dark shadow-sm hover:bg-prim hover:text-white transition-all duration-300 border border-gray-200"
                      title={social.name}
                    >
                      {getSocialIcon(social.name)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Info & Bio */}
            <div className="w-full xl:w-2/3 animate-fade-in-up">
              <div className="mb-10">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-4 py-1 bg-prim/10 text-prim rounded-full text-xs font-bold tracking-widest uppercase">
                    Featured Speaker
                  </span>

                  <span className="flex items-center gap-1.5 text-gray-400 text-sm font-medium">
                    <MapPin className="text-prim" size={18} />
                    {speaker.location || "Global Presence"}
                  </span>
                </div>

                <h2 className="text-5xl lg:text-7xl font-bold font-unbounded text-prim-dark mb-6 leading-tight">
                  {speaker.name}
                </h2>

                <div className="flex items-center gap-4 mb-8">
                  <div className="h-0.5 w-12 bg-prim rounded-full"></div>
                  <p className="text-prim text-2xl lg:text-3xl font-medium">{speaker.role} <span className="text-gray-300 mx-2">|</span> {speaker.company}</p>
                </div>

                <div className="space-y-6 text-gray-500 text-xl leading-relaxed">
                  <p className="font-semibold text-prim-dark italic">"{speaker.description}"</p>
                  <p>{speaker.bio || "Bringing years of experience and a passion for innovation, this speaker delivers insightful sessions that challenge traditional thinking and inspire progress in their field."}</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                {speaker.stats?.map((stat, idx) => (
                  <div key={idx} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                    <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-bold mb-3 group-hover:text-prim transition-colors">{stat.label}</p>
                    <p className="text-2xl lg:text-3xl font-bold font-unbounded text-prim-dark leading-none">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-3">
                {speaker.expertise?.map((tag, idx) => (
                  <span key={idx} className="px-6 py-2.5 bg-gray-light text-prim-dark border border-gray-200 rounded-lg text-sm font-bold hover:border-prim/30 hover:bg-white hover:text-prim transition-all cursor-default">
                    # {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-100 w-full mb-20"></div>

          {/* Bottom Section: Skills & Details */}
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left: Skills */}
            <div className="w-full lg:w-1/2">
              <div className="mb-10">
                <h4 className="text-3xl font-bold font-unbounded text-prim-dark mb-4">Professional Skills</h4>
                <p className="text-gray-500 text-lg">A snapshot of the key strengths and technical competencies.</p>
              </div>
              <div className="space-y-8">
                {speaker.skills?.map((skill, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="font-bold text-prim-dark text-lg uppercase tracking-wide">{skill.name}</span>
                      <span className="text-prim font-bold">{skill.percent}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-prim transition-all duration-1000 ease-out rounded-full"
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Speaker Icon Box / CTA */}
            <div className="w-full lg:w-1/2">
              <div className="bg-prim-dark p-12 rounded-[2rem] text-white relative overflow-hidden group">
                {/* Background Decoration */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-prim/20 rounded-full blur-[100px] group-hover:bg-prim/30 transition-all duration-700"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-prim p-5 rounded-3xl mb-8 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <img src={SpeakerIconDefault} alt="icon" className="w-full h-full invert" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold font-unbounded mb-6 leading-tight">Interested in collaborating?</h3>
                  <p className="text-gray-400 text-lg mb-10 max-w-sm">
                    Schedule a meeting or inquiry about bringing this speaker to your next big event.
                  </p>
                  <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-prim hover:bg-white hover:text-prim-dark text-white font-bold rounded-xl transition-all duration-400 text-lg uppercase tracking-wider">
                    Get in Touch Today
                  </Link>
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div className="flex items-center gap-5 p-6 bg-gray-light rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:border-prim/20">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-inner">
                    <Calendar className="w-7 h-7 text-prim" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Availability</p>
                    <p className="text-prim-dark font-bold">Limited (2/mo)</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-6 bg-gray-light rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:border-prim/20">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-inner">
                    <Languages className="w-7 h-7 text-prim" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Languages</p>
                    <p className="text-prim-dark font-bold">English, Spanish</p>
                  </div>
                </div>

                {/* Corporate Email */}
                <div className="flex items-center gap-5 p-6 bg-gray-light rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:border-prim/20">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-inner">
                    <Mail className="w-7 h-7 text-prim" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Corporate Email</p>
                    <a href={`mailto:${speaker.email}`} className="text-prim-dark font-bold hover:text-prim transition-colors truncate block">
                      {speaker.email || "contact@event.com"}
                    </a>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-center gap-5 p-6 bg-gray-light rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:border-prim/20">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-inner">
                    <Phone className="w-7 h-7 text-prim" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</p>
                    <a href={`tel:${speaker.phone}`} className="text-prim-dark font-bold hover:text-prim transition-colors">
                      {speaker.phone || "+1 234 567 890"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpeakersDetails