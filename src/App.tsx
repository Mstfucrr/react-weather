import { useEffect, useState } from "react";
import { getWeatherData } from "./api/controller/weather.api";
import {getNewsData} from "./api/controller/WeatherNews.api";
import News from "./api/model/News";
import { WeatherApiResponse, WeatherApiRequestLatLng } from "./api/model/WeatherModel";
import { ForecastTable } from "./components/ForecastTable";
import Places from "./components/Header";
import { Navbar } from "./components/Navbar";
import { NewsList } from "./components/News/NewsList";



function App() {

  const [selected, setSelected] = useState<WeatherApiRequestLatLng>(
    { lat: 0, lng: 0 } as WeatherApiRequestLatLng);

  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null);

  const [newsData, setNewsData] = useState<News[] | null>(null);

  useEffect(() => {

    if (!selected) return;
    getWeatherData(
      selected.lat, selected.lng
    ).then((res) => {
      setWeatherData(res);
      console.log(res)
    });

  }, [selected]);

  useEffect(() => {
    async function fetchNewsData() {
      const news = await getNewsData();
      setNewsData(news);
    }
    fetchNewsData();

  }, []);


  return (
    <div className="App">
      <Navbar />
      <Places setSelected={setSelected} />
      {weatherData && <ForecastTable weatherData={weatherData} />}
      {newsData && <NewsList newsList={newsData} />}
    </div>
  );
}

export default App;
