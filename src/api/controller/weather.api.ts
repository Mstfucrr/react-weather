import { weatherService } from '../service/index'
import { WeatherApiResponse } from '../model/WeatherModel'


export default class WeatherController {
    public static async getWeatherData(city: string): Promise<WeatherApiResponse> {
        const weatherData = await weatherService.getWeatherAsync(city);
        return weatherData;
    }
}

