// weather api test

import {
    getWeatherData
} from '../api/controller/weather.api';

import {
    getNewsData
} from '../api/controller/WeatherNews.api';

describe('weather api test', () => {
    it('get weather data', async () => {
        const data = await getWeatherData(22.5726, 88.3639);
        expect(data).not.toBeNull();
    });
});

describe('weather news api test', () => {
    it('get weather news data', async () => {
        const data = await getNewsData();
        expect(data).not.toBeNull();
    });
});