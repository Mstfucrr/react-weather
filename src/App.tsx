import { useEffect, useState } from "react";
import { getWeatherData } from "./api/controller/weather.api";
import { WeatherApiResponse, WeatherApiRequestLatLng } from "./api/model/WeatherModel";
import { ForecastTable } from "./components/ForecastTable";
import Places from "./components/Header";
import { Navbar } from "./components/Navbar";
function App() {

  const [selected, setSelected] = useState<WeatherApiRequestLatLng>(
    { lat: 0, lng: 0} as  WeatherApiRequestLatLng);

  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null);

  useEffect(() => {

    if (!selected) return;
    getWeatherData(
      selected.lat, selected.lng
    ).then((res) => {
      setWeatherData(res);
      console.log(res)
    });

  }, [selected]);


  return (
    <div className="App">
      <Navbar />
      <Places setSelected={setSelected} />
      <ForecastTable weatherData={weatherData} />
    </div>
  );
}

export default App;
