import React from 'react'
import { Current, Forecastday, Location, WeatherApiResponse } from '../api/model/WeatherModel'
import { ForecastData } from './ForecastData'
import { Forecast } from '../api/model/WeatherModel'
import { ForecastToday } from './ForecastToday'

export const ForecastList = (
    { weatherData }: { weatherData: WeatherApiResponse | null }
) => {
    return (
        <div className='w-full bg-[#323544] table table-fixed overflow-hidden rounded-t-[15px] mt-[-150px]'>
            {weatherData && (
                weatherData.current && (
                    <ForecastToday current={weatherData.current as Current } location={weatherData.location as Location} />
                )
            )}
            {weatherData && weatherData.forecast &&

                weatherData.forecast.forecastday.slice(1).map((forecast, index) => (
                    <ForecastData key={index} forecast={forecast as Forecastday} />
                ))
            }

        </div>
    )
}
