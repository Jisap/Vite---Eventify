import { useState, useMemo } from "react"
import { Link, useParams } from "react-router-dom"
import ScheduleData from "../../Data/SchedulesData.json"
import SpeakersData from "../../Data/Speakers.json"
import PageHeader from "../../Components/PageHeader/PageHeader"
import Logo from "../../Components/Navbar/Logo/Logo"
import { PhoneCall, CheckCircle2 } from "lucide-react"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"


const sectionbanner = "/Images/section-banner.jpg"
const schedulesicon01 = "/Images/SchedulesPage/ScheduleDetails/scheduledetails-icon01.svg"
const schedulesicon02 = "/Images/SchedulesPage/ScheduleDetails/scheduledetails-icon02.svg"
const schedulesicon03 = "/Images/SchedulesPage/ScheduleDetails/scheduledetails-icon03.svg"
const schedulesicon04 = "/Images/SchedulesPage/ScheduleDetails/scheduledetails-icon04.svg"
const schedulesicon05 = "/Images/SchedulesPage/ScheduleDetails/scheduledetails-icon05.svg"
const schedulesicon06 = "/Images/SchedulesPage/ScheduleDetails/scheduledetails-icon06.svg"
const schedulesicon07 = "/Images/SchedulesPage/ScheduleDetails/scheduledetails-icon07.svg"
const schedulesicon08 = "/Images/SchedulesPage/ScheduleDetails/scheduledetails-icon08.svg"
const sidebarimg = "/Images/SchedulesPage/ScheduleDetails/sidebar-image.jpg"
const schedulesexperctbox1 = "/Images/SchedulesPage/ScheduleDetails/schedule-expect-box-1.jpg"
const schedulesexperctbox2 = "/Images/SchedulesPage/ScheduleDetails/schedule-expect-box-2.jpg"
const SpeakerIcon = "/Images/Index/Speakers/speaker-icon.svg"


const SchedulesDetails = () => {

  const { id } = useParams();

  const schedule = useMemo(() => 
    ScheduleData.find((s) => s.id === id), [id]
  );

  const speaker = useMemo(() => {
    if (!schedule || !schedule.speaker) return null;
    return SpeakersData.find(s => s.name === schedule.speaker);
  }, [schedule]);

  if (!schedule) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Schedule not found</h1>
      </div>
    )
  };

  const [openIndex, setOpenIndex] = useState(2);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageHeader title="Event Schedule Details" bgImage={sectionbanner} />

      <div className="px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] flex justify-between items-start flex-col xl:flex-row gap-10">
        <div className="w-full xl:w-[30%] space-y-10 relative xl:sticky xl:top-0 xl:left-0 h-full">
          <div className="event-info w-full bg-gray-light rounded-lg overflow-hidden">
            <h4 className="text-2xl text-center bg-prim text-white font-medium py-4">
              Event Information
            </h4>

            <ul className="w-full px-5">
              <li className="w-full flex items-center justify-between flex-wrap border-b border-gray-500/20 py-5">
                <span className="flex items-center gap-3 text-lg leading-none">
                  <img
                    src={schedulesicon01}
                    alt=""
                    className="w-6 h-6"
                  />
                  <strong>
                    Date:
                  </strong>
                </span>

                <span className="text-lg font-medium text-gray-500">
                  {schedule.date}
                </span>
              </li>

              <li className="w-full flex items-center justify-between flex-wrap border-b border-gray-500/20 py-5">
                <span className="flex items-center gap-3 text-lg leading-none">
                  <img
                    src={schedulesicon02}
                    alt=""
                  />
                  <strong>
                    Time:
                  </strong>
                </span>

                <span className="text-lg font-medium text-gray-500">
                  {schedule.time}
                </span>
              </li>

              <li className="w-full flex items-center justify-between flex-wrap border-b border-gray-500/20 py-5">
                <span className="flex items-center gap-3 text-lg leading-none">
                  <img
                    src={schedulesicon03}
                    alt=""
                  />
                  <strong>
                    Category:
                  </strong>
                </span>

                <span className="text-lg font-medium text-gray-500">
                  {schedule.category}
                </span>
              </li>

              <li className="w-full flex items-center justify-between flex-wrap border-b border-gray-500/20 py-5">
                <span className="flex items-center gap-3 text-lg leading-none">
                  <img
                    src={schedulesicon04}
                    alt=""
                  />
                  <strong>
                    Organizer:
                  </strong>
                </span>

                <span className="text-lg font-medium text-gray-500">
                  {schedule.organizer}
                </span>
              </li>

              <li className="w-full flex items-center justify-between flex-wrap border-b border-gray-500/20 py-5 last:border-none">
                <span className="flex items-center gap-3 text-lg leading-none">
                  <img
                    src={schedulesicon05}
                    alt=""
                  />
                  <strong>
                    Location:
                  </strong>
                </span>

                <span className="text-lg font-medium text-gray-500">
                  {schedule.place}
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-prim-dark text-white p-10 rounded-lg overflow-hidden">
            <Logo />

            <h3 className="pt-5 font-semibold text-2xl">
              We're here to help-reach out today.
            </h3>

            <span className="flex items-center font-semibold text-2xl mt-8">
              <PhoneCall 
                size={45}
                className="bg-prim p-3 rounded-full me-3 text-white shrink-0"
              />
              +91 123 456 789
            </span>

            <div className="w-130 mt-8 xl:mt-0 xl:translate-x-10 xl:translate-y-23 relative">
              <img
                src={sidebarimg}
                alt=""
                className="border-10 border-[#ffffff1a] rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="w-full xl:w-[70%]">
          <div className="schedule-image h-130 rounded-lg overflow-hidden glass-effect relative group">
            <img
              src={schedule.image}
              alt="schedule-image"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay for Title and Speaker */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-12">
               <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h2 className="text-white text-3xl lg:text-5xl font-bold font-unbounded mb-4 leading-tight">
                    {schedule.title}
                  </h2>
                  <div className="flex items-center gap-4">
                    <div className="h-1 w-12 bg-prim rounded-full"></div>
                    <p className="text-gray-200 text-xl lg:text-2xl font-medium">
                      {schedule.speaker && schedule.speaker !== "—" ? `Hosted by ${schedule.speaker}` : "Community Session"}
                    </p>
                  </div>
               </div>
            </div>
          </div>

          <p className="text-[#737681] pt-5 text-lg leading-relaxed">
            {schedule.desc}
          </p>

          <h3 className="mt-10 text-2xl lg:text-5xl font-bold font-unbounded">What to expect</h3>

          <p className="text-[#737681] pt-5 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <ul className="pt-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
            <li className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-prim/20 transition-all duration-300">
              <div className="mt-1 shrink-0 p-2 bg-prim/10 rounded-lg">
                <CheckCircle2 size={22} className="text-prim" />
              </div>
              <span className="text-[#737681] text-lg leading-snug font-medium">Hard to stay updated with fast-changing industry trends</span>
            </li>

            <li className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-prim/20 transition-all duration-300">
              <div className="mt-1 shrink-0 p-2 bg-prim/10 rounded-lg">
                <CheckCircle2
                  size={22}
                  className="text-prim"
                />
              </div>
              <span className="text-[#737681] text-lg leading-snug font-medium">Limited opportunities to meet potential partners or clients</span>
            </li>

            <li className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-prim/20 transition-all duration-300">
              <div className="mt-1 shrink-0 p-2 bg-prim/10 rounded-lg">
                <CheckCircle2
                  size={22}
                  className="text-prim"
                />
              </div>
              <span className="text-[#737681] text-lg leading-snug font-medium">Events that don't deliver value for the time invested</span>
            </li>

            <li className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-prim/20 transition-all duration-300">
              <div className="mt-1 shrink-0 p-2 bg-prim/10 rounded-lg">
                <CheckCircle2 size={22} className="text-prim" />
              </div>
              <span className="text-[#737681] text-lg leading-snug font-medium">Speakers who talk theory without real-world examples</span>
            </li>
          </ul>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 w-full">
            <div className="w-full schedulebox-image rounded-lg overflow-hidden glass-effect relative">
              <img
                src={schedulesexperctbox1} alt="schedulebox1" className="w-full h-full"
              />
            </div>

            <div className="w-full schedulebox-image rounded-lg overflow-hidden glass-effect relative">
              <img
                src={schedulesexperctbox2} alt="schedulebox2" className="w-full h-full"
              />
            </div>
          </div>

          {/* Speaker Section - Only show if there's a real speaker assigned (not a dash) */}
          {schedule.speaker && schedule.speaker !== "—" && (
            <div className="w-full flex justify-between items-stretch flex-col lg:flex-row gap-8 pt-8 animation-fade-in">
              <div className="speakers-item w-full lg:w-1/2 p-3 relative overflow-hidden group aspect-[3/4] lg:aspect-auto lg:h-[500px] bg-gray-100 rounded-xl">
                <img
                  src={speaker ? speaker.image : "/Images/Index/Speakers/speaker-1.jpg"}
                  alt={schedule.speaker}
                  className="w-full h-full rounded-md object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {speaker && speaker.socials && (
                  <ul className="space-y-3 absolute right-8 opacity-0 bottom-8 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {speaker.socials.map((social, idx) => (
                      <li key={idx} className="text-prim bg-white hover:bg-prim hover:text-white w-fit p-3 rounded-full cursor-pointer transition-colors duration-300 shadow-lg">
                        <Link to={social.url} target="_blank" rel="noopener noreferrer">
                          {social.name.toLowerCase() === 'facebook' && <FaFacebookF size={20} />}
                          {social.name.toLowerCase() === 'twitter' && <FaTwitter size={20} />}
                          {social.name.toLowerCase() === 'instagram' && <FaInstagram size={20} />}
                          {social.name.toLowerCase() === 'linkedin' && <FaLinkedinIn size={20} />}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="speakers-content w-full lg:w-1/2 flex flex-col justify-center bg-gray-light p-10 rounded-xl border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl lg:text-3xl font-bold pb-2 hover:text-prim transition-color duration-300 cursor-pointer font-unbounded">
                      {schedule.speaker}
                    </h4>
                    <p className="text-prim font-medium text-lg">{schedule.role}</p>
                    {speaker && <p className="text-gray-400 mt-2 font-medium">{speaker.company}</p>}
                  </div>

                  <div className="w-14 h-14 bg-prim p-4 rounded-full hover:bg-black transition-colors duration-300 cursor-pointer shadow-lg shrink-0">
                    <img src={SpeakerIcon} alt="speaker-icon" className="w-full h-full object-contain invert" />
                  </div>
                </div>
                
                <div className="mt-6 border-t border-gray-300 pt-6">
                   <p className="text-gray-500 leading-relaxed italic">
                     "{speaker ? speaker.description : "Expert voice sharing knowledge and insights in this session."}"
                   </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default SchedulesDetails