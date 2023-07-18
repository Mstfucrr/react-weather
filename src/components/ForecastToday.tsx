import React from 'react'
import { Current, Location } from '../api/model/WeatherModel'
const umberella = require('../assets/images/icon-umberella.png')
const wind = require('../assets/images/icon-wind.png')
const compass = require('../assets/images/icon-compass.png')


export const ForecastToday = ({ current, location }: { current: Current, location: Location }) => {
    return (
        <div className='w-[420px] table-cell align-top even:bg-[#262936]'>
            {/* header */}
            <div className='after:clear-both after:block after:overflow-hidden after:h-0
                        bg-[#0000001a] p-[10px] text-center font-[400] w-full after:content-[" "]'>
                {/* localtime = 2023-07-18 15:31 */}
                {/* day  ex. Monday */}
                <div className='float-left'>
                    {location.localtime.split(' ')[0]}
                </div>
                {/* date ex. 6 Oct*/}
                <div className='float-right'>
                    {location.localtime.split(' ')[1]}
                </div>
            </div>
            {/* forecast-content */}
            <div className="text-left py-[30px] px-[20px]">
                {/* location */}
                <div className='text-[18px] font-[400]'>
                    {current.condition.text}
                </div>
                {/* degree */}
                <div className='text-[24px] text-white font-[700]'>
                    {/* num */}
                    <div className="inline-block align-middle text-[90px] mr-[15px]">
                        {current.temp_c}<sup>°</sup>C
                    </div>
                    {/* icon */}
                    <div className="align-middle inline-block h-[50px] mb-[20px]">
                        <img src={current.condition.icon} alt="" className='w-[90px]' />
                    </div>
                </div>
                <div className="flex justify-start row">

                    <span className='mr-[20px]'><img className='mr-[5px] inline-block align-middle' src={umberella} alt="umbrella" />{current.humidity}%</span>
                    <span className='mr-[20px]'><img className='mr-[5px] inline-block align-middle' src={wind} alt="wind" />{current.wind_kph}km/h</span>
                    <span className='mr-[20px]'><img className='mr-[5px] inline-block align-middle' src={compass} alt="compass" />{current.wind_degree}°</span>
                </div>

            </div>
        </div>
    )
}
