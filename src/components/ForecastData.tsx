import React from 'react'
import { Forecastday } from '../api/model/WeatherModel'
const umberella = require('../assets/images/icon-umberella.png')
const wind = require('../assets/images/icon-wind.png')

export const ForecastData = ({ forecast }: { forecast: Forecastday }) => {
    return (
        <div className='table-cell align-top even:bg-[#262936]'>
            {/* header */}
            <div className='bg-[#0000001a] p-[10px] text-center font-[400]'>
                {forecast.date}
            </div>
            {/* forecast-content */}
            <div className="text-center p-[20px]">
                {/* icon */}
                <div className="h-auto mb-[20px] flex justify-center">
                    <img src={forecast.day.condition.icon} alt="" className='w-[80px]' />
                </div>
                {/* degree */}
                <div className="text-[24px] text-white font-[700]">
                    {forecast.day.maxtemp_c}<sup>°</sup>C
                </div>
                <small className='text-[16px]'>
                    {forecast.day.mintemp_c}<sup>°</sup>
                </small>
                <div className="flex justify-between row mt-4">

                    <span className='mr-[20px]'><img className='mr-[5px] inline-block align-middle' src={umberella} alt="umbrella" />{forecast.day.avghumidity}%</span>
                    <span className='mr-[20px]'><img className='mr-[5px] inline-block align-middle' src={wind} alt="wind" />{forecast.day.maxwind_kph}km/h</span>
                </div>
            </div>
        </div>
    )
}
