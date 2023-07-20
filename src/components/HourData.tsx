import React from 'react'
import { Hour } from '../api/model/WeatherModel'
import { motion } from 'framer-motion'

export const HourData = ({ hour }: { hour: Hour }) => {
    return (
        <motion.div className="h-auto min-w-[50.2px] text-center
        border-r-[1px] border-[#4D4D4D] hover:bg-[#4D4D4D] hover:text-[#FFFFFF]
        transition duration-100 ease-in-out"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            layoutId={hour.time}
            // duration={0.5}
            // delay= 1 den 24 e kadar 0.1 artarak gidiyor
            transition={{ duration: 0.4 , delay : parseInt(hour.time.slice(11, 13)) * 0.15  }}


        >
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
        </motion.div>
    )
}
