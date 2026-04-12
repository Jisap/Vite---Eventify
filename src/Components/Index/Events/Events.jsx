import MarqueeIcon from "../../../assets/Images/Index/About/icon-marquee.svg"
import eventsBg from "../../../assets/Images/bg-image.png"
import eventimg1 from "../../../assets/Images/Index/Events/event-schedule-item-1.jpg"
import eventimg2 from "../../../assets/Images/Index/Events/event-schedule-item-2.jpg"
import eventimg3 from "../../../assets/Images/Index/Events/event-schedule-item-3.jpg"
import eventimg4 from "../../../assets/Images/Index/Events/event-schedule-item-4.jpg"
import eventicon from "../../../assets/Images/Index/Events/eventicon.svg"
import { useState } from "react"

const events = {
  day1: [
    {
      img: eventimg1,
      time: "9:00 AM - 5:30 PM",
      date: "22 March 2026",
      title: "Digital Marketing Masterclass",
      desc: "Master the latest digital marketing strategies and tools to boost your business growth. Perfect for entrepreneurs, marketers, and business owners."
    },
    {
      img: eventimg2,
      time: "10:00 AM - 4:00 PM",
      date: "22 March 2026",
      title: "Professional Skills Development Workshop",
      desc: "Unlock your potential and elevate your career with this hands-on workshop focused on communication, leadership, and productivity skills."
    },
    {
      img: eventimg3,
      time: "11:30 AM - 1:30 PM",
      date: "22 March 2026",
      title: "Startup Pitch & Networking Session",
      desc: "Connect with innovators and investors while discovering exciting startup ideas. A great opportunity to expand your professional network."
    },
    {
      img: eventimg4,
      time: "3:00 PM - 6:00 PM",
      date: "22 March 2026",
      title: "Introduction to AI for Business",
      desc: "Explore how artificial intelligence is transforming industries and learn practical ways to integrate AI into your business processes."
    }
  ],

  day2: [
    {
      img: eventimg1,
      time: "9:30 AM - 12:30 PM",
      date: "23 March 2026",
      title: "Creative Design Thinking Workshop",
      desc: "Learn how to approach problems creatively using design thinking methodologies. Ideal for designers, developers, and product teams."
    },
    {
      img: eventimg2,
      time: "11:00 AM - 2:00 PM",
      date: "23 March 2026",
      title: "Social Media Growth Strategies",
      desc: "Discover proven techniques to grow your audience and increase engagement across major social media platforms."
    },
    {
      img: eventimg3,
      time: "2:30 PM - 4:30 PM",
      date: "23 March 2026",
      title: "Web Development Trends 2026",
      desc: "Stay ahead of the curve with the latest trends in web development, including frameworks, performance optimization, and UX best practices."
    },
    {
      img: eventimg4,
      time: "5:00 PM - 7:00 PM",
      date: "23 March 2026",
      title: "Evening Networking & Panel Talk",
      desc: "Join industry experts for an engaging panel discussion followed by an open networking session with attendees and speakers."
    }
  ],

  day3: [
    {
      img: eventimg1,
      time: "9:00 AM - 11:00 AM",
      date: "24 March 2026",
      title: "Leadership & Team Management",
      desc: "Develop essential leadership skills and learn how to effectively manage and motivate high-performing teams."
    },
    {
      img: eventimg2,
      time: "11:30 AM - 1:30 PM",
      date: "24 March 2026",
      title: "Entrepreneurship Essentials",
      desc: "Gain insights into building and scaling a successful business, from idea validation to funding strategies."
    },
    {
      img: eventimg3,
      time: "2:00 PM - 4:00 PM",
      date: "24 March 2026",
      title: "Personal Branding & Online Presence",
      desc: "Learn how to build a strong personal brand and stand out in the digital world through effective online presence strategies."
    },
    {
      img: eventimg4,
      time: "4:30 PM - 6:30 PM",
      date: "24 March 2026",
      title: "Closing Ceremony & Awards",
      desc: "Celebrate the highlights of the event, recognize outstanding contributions, and wrap up with a memorable closing ceremony."
    }
  ]
};

const Events = () => {

  const [activeDay, setActiveDay] = useState("day1")

  return (
    <>
      <div className="features px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] bg-prim-dark relative space-y-10 lg:space-y-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={eventsBg}
            alt="events-image"
            className="w-full h-full"
          />
        </div>

        <div className="features-content text-center mx-auto max-w-full lg:max-w-180 z-1 relative">
          <span className="flex items-center bg-prim w-fit mx-auto rounded-full text-white pe-3 text-sm md:text-md font-medium mb-3">
            <img
              src={MarqueeIcon}
              alt="marquee-icon"
              className="w-7 h-7 md:w-8 md:h-8 p-2"
            />
            Our Event Schedule
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Explore the complete schedule for our event
          </h2>
        </div>

        <div className="event-main w-full flex justify-center items-center flex-col z-10 relative">
          <ul className="flex items-center flex-col w-full sm:flex-row sm:w-fit bg-white/20 backdrop-blur-2xl gap-5 rounded-md sm:rounded-full overflow-hidden p-3 mb-10">
            {["day1", "day2", "day3"].map((day, index) => (
              <li key={index}>
                <button
                  onClick={() => setActiveDay(day)}
                  className={`
                    text-xl cursor-pointer font-semibold font-unbounded p-5 rounded-full transition 
                    ${activeDay === day ? "bg-white text-black" : "text-white"}  
                  `}
                >
                  Day 0{index + 1}
                </button>
              </li>
            ))}
          </ul>

          <div className="event-main-content flex flex-col items-start space-y-8">
            {events[activeDay].map((event, i) => (
              <div key={i} className="event-item flex justify-between items-center flex-wrap xl:flex-nowrap gap-5 xl:gap-20 text-white border-b border-gray-50/20 pb-5">
                <div className="flex items-start sm:items-center sm:flex-row gap-8 min-w-full sm:min-w-100">
                  <img
                    src={event.img}
                    alt="event-img"
                    className="rounded-full w-30 h-30"
                  />

                  <div>
                    <h3 className="text-xl font-semibold pb-1">
                      {event.time}
                    </h3>

                    <span>{event.date}</span>
                  </div>
                </div>

                <div className="max-w-150">
                  <h3 className="text-xl font-semibold pb-1">
                    {event.title}
                  </h3>

                  <span>
                    {event.desc}
                  </span>
                </div>

                <div className="flex items-center gap-5">
                  <img src={eventicon} alt="event-icon" className="border border-gray-300/20 rounded-full p-2" />

                  <p className="text-md">
                    Street, Block 12 Sector 4, Ipsum City
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Events