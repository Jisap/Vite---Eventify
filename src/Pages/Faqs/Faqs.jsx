
import PageHeader from '../../Components/PageHeader/PageHeader'
import Faqs from '../../Components/Index/Faqs/Faqs'
import { Icon } from '@iconify/react'
import Logo from '../../Components/Navbar/Logo/Logo'
import { useRef, useState, useLayoutEffect } from 'react'
import { revealUp, revealLeft } from '../../utils/gsapAnimations'
import { gsap } from 'gsap'

const sidebarimg = "/Images/sidebar-image.jpg"
const faqicon = "/Images/FaqsPage/faqs-icon.svg"

const FAQ_DATA = [
  {
    id: "general",
    title: "General Questions",
    refName: "generalRef",
    items: [
      {
        question: "How does the complete event register process actually work?",
        answer: "The registration process is simple: browse the events, select your preferred pass, fill in your details, and complete the secure payment. You'll receive a confirmation email with your digital ticket immediately."
      },
      {
        question: "Where is the main event venue located precisely?",
        answer: "The main event takes place at the Grand Convention Center, located at 123 Innovation Drive, Tech City. Detailed directions and parking information are included in your registration package."
      },
      {
        question: "Can attendees freely switch between sessions and tracks?",
        answer: "Yes, once you have a standard or premium pass, you can move between most sessions as long as room capacity allows. Some workshops may require pre-registration due to limited seating."
      },
      {
        question: "Does the event provide virtual participation options online?",
        answer: "Absolutely! We offer a specialized Virtual Pass that provides live streaming access to all keynote sessions and selected workshops, along with digital networking opportunities."
      },
      {
        question: "What is the event refund and cancellation policy?",
        answer: "Cancellations made up to 30 days before the event are eligible for a full refund. Between 30 and 15 days, a 50% refund is available. No refunds are issued within 14 days of the event."
      }
    ]
  },
  {
    id: "ticket",
    title: "Ticket & Payment",
    refName: "ticketRef",
    items: [
      {
        question: "What payment methods are accepted for registration?",
        answer: "We accept all major credit cards (Visa, MasterCard, Amex), PayPal, and bank transfers for corporate group bookings. All transactions are encrypted and secure."
      },
      {
        question: "Are there any early bird or group discounts available?",
        answer: "Yes! Early bird pricing is available until two months before the event. We also offer a 15% discount for groups of 5 or more from the same organization."
      },
      {
        question: "Can I upgrade my ticket type after purchase?",
        answer: "Yes, you can upgrade your pass at any time through our user portal by paying the price difference, provided the new pass type is still available."
      }
    ]
  },
  {
    id: "event",
    title: "Event Details",
    refName: "eventRef",
    items: [
      {
        question: "When will the full event schedule be released?",
        answer: "The preliminary schedule is available now on our site. The final detailed schedule including room assignments will be published 4 weeks before the event starts."
      },
      {
        question: "Is there a recommended dress code for the conference?",
        answer: "The official dress code is Business Casual. However, we recommend comfortable shoes as there will be quite a bit of networking and moving between halls."
      },
      {
        question: "Will session recordings be available after the event?",
        answer: "Yes, most sessions are recorded and will be available to all registered attendees through our digital platform for 12 months after the conference."
      }
    ]
  },
  {
    id: "session",
    title: "Session & Activities",
    refName: "sessionRef",
    items: [
      {
        question: "How do I sign up for specific hands-on workshops?",
        answer: "Once you register, you'll receive access to our mobile app where you can reserve seats for specific workshops beginning 2 weeks before the event."
      },
      {
        question: "Are there networking sessions for first-time attendees?",
        answer: "Definitely! We host a 'Newcomers Breakfast' on the first day and dedicated networking mixers every evening to help everyone connect easily."
      }
    ]
  },
  {
    id: "food",
    title: "Food, Facilities & Accessibility",
    refName: "foodRef",
    items: [
      {
        question: "Are meals provided, and how are dietary restrictions handled?",
        answer: "Lunch and refreshments are provided daily. You can specify dietary requirements (vegan, gluten-free, etc.) in your registration form, and we will cater specifically for you."
      },
      {
        question: "Is the venue fully accessible for people with disabilities?",
        answer: "Yes, our venue is fully ADA-compliant with ramps, elevator access to all levels, and dedicated seating areas in every theater."
      },
      {
        question: "Is there high-speed Wi-Fi available for all attendees?",
        answer: "Yes, we provide complimentary high-speed Wi-Fi throughout the entire venue. Connection details will be provided at the registration desk."
      }
    ]
  }
]

const FaqsPage = () => {

  const [activeFaq, setActiveFaq] = useState(null);

  const toggle = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const sectionRefs = {
    generalRef: useRef(null),
    ticketRef: useRef(null),
    eventRef: useRef(null),
    sessionRef: useRef(null),
    foodRef: useRef(null),
  };

  const scrollToSection = (refName) => {
    sectionRefs[refName].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        revealLeft(".faq-sidebar")
        revealUp(".faq-section")
    }, mainRef)
    return () => ctx.revert()
  }, [])

  const mainRef = useRef(null)

  return (
    <div ref={mainRef} className="bg-white min-h-screen">
      <PageHeader
        title="FAQ Center"
        breadcrumbTitle="Frequently Asked Questions"
        bgImage="/Images/section-banner.jpg"
      />

      <div className='px-[5%] lg:px-[10%] py-20 lg:py-32 flex justify-between items-start flex-col xl:flex-row gap-16'>
        {/* Sidebar */}
        <div className='faq-sidebar w-full xl:w-[30%] space-y-10 relative xl:sticky xl:top-32 h-full'>
          <div className='info w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100'>
            <div className="bg-prim p-6 text-white">
              <h4 className="text-xl font-bold flex items-center gap-2">
                <Icon icon="ri:list-settings-line" width="24" />
                Categories
              </h4>
            </div>
            
            <div className="flex flex-col">
              {FAQ_DATA.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.refName)}
                  className='flex items-center justify-between border-b border-gray-100 py-6 px-8 group hover:bg-gray-50 transition-all duration-300'
                >
                  <span className='text-gray-500 font-bold group-hover:text-prim transition-colors duration-300'>
                    {section.title}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-prim group-hover:text-white transition-all duration-300">
                    <Icon icon="ri:arrow-right-s-line" width="20" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className='bg-prim-dark text-white p-12 rounded-[2.5rem] overflow-hidden relative shadow-2xl'>
            <div className="absolute top-0 right-0 w-32 h-32 bg-prim/20 rounded-full blur-3xl -translate-y-10 translate-x-10"></div>
            
            <Logo />
            <h3 className='pt-8 font-bold text-3xl font-unbounded leading-tight mb-8'>Still have <br/><span className="text-prim">Questions?</span></h3>

            <div className="space-y-6">
              <a href="tel:+1234567890" className='flex items-center gap-4 group'>
                <div className="w-14 h-14 bg-prim rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <Icon icon="ri:phone-fill" width="28" className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Call Us</p>
                  <p className="text-xl font-bold">+1 (234) 567-890</p>
                </div>
              </a>

              <a href="mailto:support@eventify.com" className='flex items-center gap-4 group text-white/90'>
                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:-rotate-6 transition-transform">
                  <Icon icon="ri:mail-fill" width="28" className="text-prim" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                  <p className="text-xl font-bold">hello@eventify.com</p>
                </div>
              </a>
            </div>

            <div className='w-full mt-12 relative'>
              <img src={sidebarimg} alt="sidebar-img" className='border-8 border-white/5 rounded-[2rem] shadow-lg' />
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className='w-full xl:w-[70%] space-y-20'>
          {FAQ_DATA.map((section) => (
            <div key={section.id} ref={sectionRefs[section.refName]} className="faq-section scroll-mt-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-10 bg-prim rounded-full"></div>
                <h3 className='text-3xl lg:text-4xl font-bold font-unbounded text-prim-dark'>
                  {section.title}
                </h3>
              </div>

              <div className='space-y-4'>
                {section.items.map((item, idx) => {
                  const faqId = `${section.id}-${idx}`;
                  const isOpen = activeFaq === faqId;
                  
                  return (
                    <div
                      key={faqId}
                      className={`flex flex-col rounded-[2rem] transition-all duration-500 overflow-hidden ${
                        isOpen ? 'bg-prim-dark text-white shadow-2xl' : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
                      }`}
                    >
                      <button
                        onClick={() => toggle(faqId)}
                        className='flex items-center justify-between px-8 py-7 lg:px-10 text-left'
                      >
                        <span className={`text-lg lg:text-xl font-bold leading-tight ${isOpen ? 'text-white' : 'text-prim-dark'}`}>
                          {item.question}
                        </span>

                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                          isOpen ? 'bg-prim text-white rotate-180' : 'bg-prim/10 text-prim'
                        }`}>
                          <Icon icon="ri:arrow-down-s-line" width="24" />
                        </div>
                      </button>

                      <div className={`transition-all duration-500 ease-in-out ${
                        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-8 pb-8 lg:px-10 lg:pb-10 pt-2 border-t border-white/10 mt-2">
                          <p className={`text-lg leading-relaxed ${isOpen ? 'text-gray-300' : 'text-gray-500'}`}>
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FaqsPage