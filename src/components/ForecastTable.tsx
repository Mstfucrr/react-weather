import { WeatherApiResponse, Forecastday } from '../api/model/WeatherModel'
import { DetailForecast } from './DetailForecast'
import { ForecastData } from './ForecastData'
import { ForecastList } from './ForecastList'

export const ForecastTable = (
    { weatherData }: { weatherData: WeatherApiResponse | null }
) => {
    return (
        <div className="container max-w-[1170px] mx-auto">
            <ForecastList weatherData={weatherData} />
            <hr className='my-2' />
            <DetailForecast forecastday={weatherData?.forecast.forecastday[0] as Forecastday} localtime={weatherData?.location.localtime as string} />
        </div>
    )
}
