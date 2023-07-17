import { WeatherApiResponse } from "../model/WeatherModel";

class WeatherService {
    constructor(options) {
        this.options = options;
    }

    async getWeatherAsync(city) {
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${this.options.apiKey}&days=10&q=${city}&aqi=no`;

        try {
            const response = await fetch(
                url,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }

            );
            if (!response.ok) {
                throw new Error('Weather data could not be retrieved.');
            }

            const weatherResponse = await response.json();
            return weatherResponse;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

// key = d1398cba8a894feb9f7180821232602

export const weatherService = new WeatherService({
    apiKey: 'd1398cba8a894feb9f7180821232602',
});

