import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import ScheduleData from "../../Data/SchedulesData.json"
import PageHeader from "../../Components/PageHeader/PageHeader"
import Logo from "../../Components/Navbar/Logo/Logo"
import { Icon } from "@iconify/react"


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
const SpeakerImg1 = "/Images/Index/Speakers/speaker-1.jpg"
const SpeakerIcon = "/Images/Index/Speakers/speaker-icon.svg"


const SchedulesDetails = () => {

  const { id } = useParams();

  const schedule = ScheduleData.find((schedule) => schedule.id === id);

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
              <Icon
                icon="famicons:call-outline"
                width="45"
                height="45"
                className="bg-prim p-2 rounded-full me-3"
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
          <div className="schedule-image h-130 rounded-lg overflow-hidden glass-effect relative">
            <img
              src={schedule.image}
              alt="schedule-image"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-[#737681] pt-5 text-lg leading-relaxed">
            {schedule.desc}
          </p>

          <h3 className="mt-10 text-2xl lg:text-5xl font-bold font-unbounded">What to expect</h3>

          <p className="text-[#737681] pt-5 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <ul className="pt-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
            <li className="flex items-start gap-4 text-[#737681] text-lg">
              <div className="mt-1 shrink-0">
                <Icon
                  icon="material-symbols:check-rounded"
                  width="22"
                  height="22"
                  className="bg-prim text-white rounded-full p-0.5"
                />
              </div>
              <span className="leading-snug">Hard to stay updated with fast-changing industry trends</span>
            </li>

            <li className="flex items-start gap-4 text-[#737681] text-lg">
              <div className="mt-1 shrink-0">
                <Icon
                  icon="material-symbols:check-rounded"
                  width="22"
                  height="22"
                  className="bg-prim text-white rounded-full p-0.5"
                />
              </div>
              <span className="leading-snug">Limited opportunities to meet potential partners or clients</span>
            </li>

            <li className="flex items-start gap-4 text-[#737681] text-lg">
              <div className="mt-1 shrink-0">
                <Icon
                  icon="material-symbols:check-rounded"
                  width="22"
                  height="22"
                  className="bg-prim text-white rounded-full p-0.5"
                />
              </div>
              <span className="leading-snug">Events that don't deliver value for the time invested</span>
            </li>

            <li className="flex items-start gap-4 text-[#737681] text-lg">
              <div className="mt-1 shrink-0">
                <Icon
                  icon="material-symbols:check-rounded"
                  width="22"
                  height="22"
                  className="bg-prim text-white rounded-full p-0.5"
                />
              </div>
              <span className="leading-snug">Speakers who talk theory without real-world examples</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SchedulesDetails