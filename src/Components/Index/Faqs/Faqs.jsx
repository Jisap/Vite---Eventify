import { useState } from "react";
import MarqueeIcon from "../../../assets/Images/Index/About/icon-marquee.svg"
import faqimg from "../../../assets/Images/Index/Faqs/faq-image.jpg"
import { Icon } from "@iconify/react"



const Faqs = () => {

  const [openIndex, setOpenIndex] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="faqs px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] flex items-center justify-between flex-col lg:flex-row gap-10 ">
        <div className="faq-img lg:w-1/2 w-full relative h-100 lg:h-200 rounded-3xl glass-effect">
          <img src={faqimg} alt="faq-image" className="w-full h-full object-cover rounded-xl" />

          <div className="faq-info z-1 bg-prim text-white hidden lg:absolute -right-4 -bottom-2.5 h-65 w-75 border-15 rounded-3xl p-5 lg:flex flex-col justify-between items-start">
            <h4 className="text-xl">
              Your Questions, Clearly Answer
            </h4>

            <div>
              <Icon
                icon="famicons:call-outline"
                width="24"
                height="24"
                className="bg-white text-prim w-10 h-10 rounded-full p-2 mb-1"
              />

              <span className="text-lg hover:text-black transition-colors duration-300">
                ++00 123 456 789
              </span>
            </div>
          </div>
        </div>

        <div className="faq-content lg:w-1/2 w-full">
          <span className="flex items-center bg-prim w-fit rounded-full text-white pe-3 text-sm md:text-md font-medium mb-3">
            <img src={MarqueeIcon} alt="marquee-icon" className="p-2 w-7 h-7 md:w-8 md:h-8" />
            FAQ's
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
            What our customers say faqs their experience
          </h2>

          <ul className="space-y-5">
            {[
              "How does the complete event register process actually work?",
              "Where is the main event venue located precisely ?",
              "Can attendees freely switch between sessions and tracks?",
              "Does the event provide virtual participation options online?",
              "What is the event refund and cancellation policy?"
            ].map((question, index) => (
              <li
                key={index}
                className="flex flex-col bg-gray-light px-5 py-5 rounded-xl"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`
                    flex border-b border-transparent justify-between items-center cursor-pointer transition-all duration-300 
                    ${openIndex === index ? "border-b border-gray-500/10!" : ""}
                  `}
                >
                  <div className="flex items-start text-start gap-2 text-lg font-semibold">
                    <span className="text-sm sm:text-lg lg:text-xl">
                      {index + 1}
                    </span>

                    <p className="text-sm sm:text-lg lg:text-xl">
                      {question}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Faqs