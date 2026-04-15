import { useState } from "react";
import faqData from "../../../Data/Faqs.json"
import { Icon } from "@iconify/react"

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%] bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Side: Interactive Image & Info Card */}
        <div className="faqs-image lg:w-[45%] w-full relative group">
          <div className="relative rounded-4xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
            <img
              src="/Images/Index/Faqs/faq-image.jpg"
              alt="faq-image"
              className="w-full aspect-4/5 lg:aspect-auto lg:h-[600px] object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
          </div>

          {/* Floating Contact Card */}
          <div className="faq-info z-10 bg-prim text-white absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 w-64 md:w-80 rounded-3xl p-6 md:p-8 shadow-2xl transform translate-y-0 hover:-translate-y-2 transition-transform duration-500 border-[10px] border-white">
            <h4 className="text-xl md:text-2xl font-bold leading-tight mb-6">
              Have more questions? <br />
              <span className="text-white/80 font-normal text-lg">We are here to help.</span>
            </h4>

            <a
              href="tel:+00123456789"
              className="group/contact flex items-center gap-4 transition-all"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-prim transition-transform group-hover/contact:scale-110 group-hover/contact:bg-black group-hover/contact:text-white">
                <Icon icon="solar:phone-calling-bold" width="24" height="24" />
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-white/60 uppercase tracking-widest font-bold">Call Us Now</span>

                <span className="text-lg md:text-xl font-bold transition-colors group-hover/contact:text-white/80">
                  +00 123 456 789
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="faq-content lg:w-[55%] w-full pt-4 lg:pt-0">
          <span className="flex items-center bg-prim w-fit rounded-full text-white pe-3 text-sm md:text-md font-medium mb-6 shadow-lg shadow-prim/20">
            <img src="/Images/Index/About/icon-marquee.svg" alt="marquee-icon" className="p-2 w-7 h-7 md:w-8 md:h-8" />
            Support Center
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-10 text-black leading-tight">
            Your questions <br />
            <span className="text-prim">clearly</span> answered
          </h2>

          <div className="accordion-wrap space-y-4">
            {faqData.map((item, index) => (
              // Fondo de cada pregunta
              <div
                key={item.id}
                className={`flex flex-col rounded-2xl transition-all duration-300 border ${openIndex === index
                  ? "bg-prim-dark border-prim-dark shadow-xl"
                  : "bg-gray-light border-gray-100 hover:border-prim/30"
                  }`}
              >
                <button
                  // Número de cada pregunta
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center p-5 md:p-6 text-left cursor-pointer group/btn"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`
                        text-lg md:text-xl font-black leading-none pt-1 transition-colors 
                        ${openIndex === index ? "text-prim" : "text-gray-300 group-hover/btn:text-prim"
                        }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Pregunta */}
                    <p className={`
                      text-base md:text-xl font-bold transition-colors 
                      ${openIndex === index ? "text-white" : "text-black"
                      }`}
                    >
                      {item.question}
                    </p>
                  </div>

                  {/* Botón de abrir/cerrar */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${openIndex === index
                    ? "bg-prim border-prim text-white rotate-180"
                    : "bg-white border-gray-200 text-black shadow-sm group-hover/btn:border-prim group-hover/btn:text-prim"
                    }`}>
                    <Icon
                      icon={openIndex === index ? "lucide:minus" : "lucide:plus"}
                      width="18"
                      height="18"
                    />
                  </div>
                </button>

                {/* Respuesta */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="p-5 md:p-6 pt-0 border-t border-white/10 mt-2">
                    <p className={`text-sm md:text-lg leading-relaxed ${openIndex === index ? "text-white/70" : "text-gray-500"
                      }`}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs
