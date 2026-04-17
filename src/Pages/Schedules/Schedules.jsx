import React, { useState } from 'react'
import PageHeader from '../../Components/PageHeader/PageHeader'
import Mainbtn from '../../Components/Buttons/Mainbtn'
import schedules from '../../Data/SchedulesData.json'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import clsx from 'clsx'

const sectionbanner = "/Images/section-banner.jpg"
const schedulesicon1 = "/Images/SchedulesPage/schedule-icon01.svg"
const schedulesicon2 = "/Images/SchedulesPage/schedule-icon02.svg"



const Schedules = () => {

  const navigation = useNavigate();
  const [activeDay, setActiveDay] = useState("day1");

  const filteredSchedules = schedules.filter(
    (schedule) => schedule.day === activeDay
  );

  return (
    <>
      <PageHeader title="Schedules" bgImage={sectionbanner} />

      <div className='schedules-container px-[2%] sm:px-[8%] lg:px-[10%] py-[6%] md:py-[10%]'>
        <ul className='flex items-center mx-auto flex-col w-full sm:flex-row sm:w-fit bg-gray-light/50 backdrop-blur-2xl gap-5 rounded-md sm:rounded-full overflow-hidden p-3 mb-10'>
          {["day1", "day2", "day3"].map((day, index) => (
            <li key={day}>
              <button
                onClick={() => setActiveDay(day)}
                className={clsx(
                  "text-xl cursor-pointer font-semibold font-unbounded p-5 rounded-full transition-all duration-300",
                  activeDay === day
                    ? "bg-prim text-white shadow-lg scale-105"
                    : "text-black bg-white/20 hover:bg-white/40"
                )}
              >
                Day 0{index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Schedules