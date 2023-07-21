
export default class WeatherService {
    constructor(options) {
        this.options = options;
    }

    async getWeatherAsync(lat, lon) {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${this.options.apiKey}&days=10&q=${lat},${lon}&aqi=no&alerts=no`;

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


