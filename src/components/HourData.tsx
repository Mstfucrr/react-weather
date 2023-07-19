import React from 'react'
import { Hour } from '../api/model/WeatherModel'


export const HourData = ({ hour }: { hour: Hour }) => {
  return (
    <div className="h-auto min-w-[50.2px] text-center
        border-r-[1px] border-[#4D4D4D] hover:bg-[#4D4D4D] hover:text-[#FFFFFF]
        transition duration-100 ease-in-out
    ">
        {/* time */}
        <div className="">
            {hour.time.slice(11, 16)}
        </div>
        {/* weather icon */}
        <div>
            <img src={hour.condition.icon} alt="icon" className='w-full my-[8px]' />
        </div>
        {/* temperature */}
        <div className="">
            {hour.temp_c}°C
        </div>
    </div>
  )
}
