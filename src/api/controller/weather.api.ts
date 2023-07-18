import { WeatherApiResponse } from '../model/WeatherModel'
import WeatherService from '../service'

export const getWeatherData = async (
    lat: number,
    lon: number
): Promise<WeatherApiResponse> => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY
    const service = new WeatherService({
        apiKey: apiKey,
    })
    return await service.getWeatherAsync(lat, lon) as WeatherApiResponse
    
}

