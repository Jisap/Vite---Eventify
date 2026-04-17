import React from 'react'
import { Link } from 'react-router-dom'
import Mainbtn from '../Buttons/Mainbtn'

const schedulesicon1 = "/Images/SchedulesPage/schedule-icon01.svg"
const schedulesicon2 = "/Images/SchedulesPage/schedule-icon02.svg"

const ScheduleCard = ({ item, priority = false }) => {
  const { id, image, time, place, title } = item

  return (
    <div className='shcedules-item bg-gray-light p-3 rounded-2xl group transition-all duration-300 hover:shadow-xl flex flex-col h-full'>
      {/* Contenedor estricto con skeleton background para mitigar cualquier layout shift (CLS) durante carga */}
      <div className='schedule-image w-full bg-gray-200 rounded-xl overflow-hidden relative glass-effect aspect-[4/3]'>
        <img
          src={image}
          alt={title}
          className='absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform'
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </div>

      <div className='schedule-content p-5 flex flex-col flex-grow'>
        <ul className='flex flex-wrap justify-between items-center gap-3 mb-4'>
          <li className='flex items-center gap-2 text-sm font-medium text-gray-700'>
            <img src={schedulesicon1} alt="time" className="w-5 h-5 object-contain" width="20" height="20" />
            <span>{time}</span>
          </li>

          <li className='flex items-center gap-2 text-sm font-medium text-gray-700'>
            <img src={schedulesicon2} alt="place" className="w-5 h-5 object-contain" width="20" height="20" />
            <span>{place}</span>
          </li>
        </ul>

        <h3 className='text-xl lg:text-2xl font-bold font-unbounded text-prim-dark mb-3 group-hover:text-prim transition-colors duration-300'>
          {title}
        </h3>

        <p className='text-gray-500 border-b border-gray-400/20 pb-6 mb-6 line-clamp-2 leading-relaxed'>
          Learn the latest trends and techniques in our {title} session, perfect for professionals looking to grow.
        </p>

        <div className='mt-auto'>
          <Link to={`/schedules/${id}`} className='w-full block'>
            <Mainbtn text="View Details" className='w-full !rounded-xl' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ScheduleCard
