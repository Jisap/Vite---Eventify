import React, { useState, useMemo, useLayoutEffect, useRef } from 'react'
import PageHeader from '../../Components/PageHeader/PageHeader'
import schedules from '../../Data/SchedulesData.json'
import clsx from 'clsx'
import ScheduleCard from '../../Components/ScheduleCard/ScheduleCard'
import { revealUp, staggerReveal } from '../../utils/gsapAnimations'
import { gsap } from 'gsap'

const sectionbanner = "/Images/section-banner.jpg"

const Schedules = () => {
  const [activeDay, setActiveDay] = useState("day1");

  const sectionRef = useRef(null)

  const filteredSchedules = useMemo(() => 
    schedules.filter((schedule) => schedule.day === activeDay),
    [activeDay]
  );

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        revealUp(".tabs-nav")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        staggerReveal(".schedule-grid > div")
    }, sectionRef)
    return () => ctx.revert()
  }, [activeDay])

  const days = [
    { id: "day1", label: "Day 01", date: "April 18, 2026" },
    { id: "day2", label: "Day 02", date: "April 19, 2026" },
    { id: "day3", label: "Day 03", date: "April 20, 2026" },
  ];

  return (
    <div ref={sectionRef} className="bg-white overflow-hidden">
      <PageHeader title="Event Schedule" bgImage={sectionbanner} />

      <div className='schedules-container px-[4%] md:px-[5%] xl:px-[6%] py-[5%] md:py-[6%] max-w-[1800px] mx-auto w-full'>
        {/* Tabs Navigation */}
        <div className='tabs-nav flex justify-center mb-12 md:mb-16'>
          <ul className='flex items-center flex-wrap justify-center bg-gray-light p-2 rounded-2xl md:rounded-full shadow-inner gap-2 w-full sm:w-auto h-fit'>
            {days.map((day) => (
              <li key={day.id} className="flex-1 sm:flex-none">
                <button
                  onClick={() => setActiveDay(day.id)}
                  className={clsx(
                    "w-full sm:w-auto px-6 py-4 md:px-10 md:py-5 rounded-xl md:rounded-full text-base md:text-lg font-bold font-unbounded transition-all duration-300 flex flex-col items-center gap-1",
                    activeDay === day.id
                      ? "bg-prim text-white shadow-xl scale-105"
                      : "text-prim-dark hover:bg-white/60"
                  )}
                >
                  <span>{day.label}</span>
                  <span className={clsx(
                    "text-[10px] uppercase tracking-widest font-sen font-normal",
                    activeDay === day.id ? "text-white/80" : "text-gray-500"
                  )}>
                    {day.date}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Schedule Grid */}
        <div
          key={activeDay}
          className='schedule-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10'
        >
          {filteredSchedules.map((item, index) => (
            <ScheduleCard 
              key={item.id} 
              item={item} 
              priority={index < 3}
            />
          ))}
        </div>

        {filteredSchedules.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-400">No events scheduled for this day yet.</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Schedules