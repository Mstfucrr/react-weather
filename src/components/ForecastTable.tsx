import { WeatherApiResponse } from '../api/model/WeatherModel'
import { ForecastData } from './ForecastData'
import { ForecastList } from './ForecastList'

export const ForecastTable = (
    { weatherData }: { weatherData: WeatherApiResponse | null }
) => {
    return (
        <div className="container max-w-[1170px] mx-auto">
            <ForecastList weatherData={weatherData} />
        </div>
    )
}
