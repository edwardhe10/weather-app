import "./App.css";
import Search from "./components/searchbar/searchbar";
import Weather from "./components/weather-curr/weather-curr";
import { weatherUrl, weatherKey } from "./API";
import { useState } from "react";
import Forecast from "./components/forecast/forecast";

// I HAVE ALSO COMMENTED OUT THE CONSOLE.LOGS FOR NEATNESS, FEEL FREE TO UNCOMMENT THEM

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const OnSearchChange = (searchdata) => {
    const [lat, lon] = searchdata.value.split(" ");
    //console.log("searchdata:");
    //console.log(searchdata);
    //console.log("updated lat long");
    //console.log(lat);
    //console.log(lon);
    const getWeather = fetch(
      `${weatherUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric`
    );
    const getForecast = fetch(
      `${weatherUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric`
    );
    console.log(getWeather);
    console.log(getForecast);

    Promise.all([getWeather, getForecast])
      .then(async (response) => {
        const weatherRes = await response[0].json();
        const forecastRes = await response[1].json();
        //console.log("data here:");
        //console.log({ city: searchdata.label, ...weatherRes });
        setWeather({ city: searchdata.label, ...weatherRes });
        setForecast({ city: searchdata.label, ...forecastRes });
      })
      .catch((error) => console.log(error));
  };

  //console.log(forecast);

  return (
    <div className="box">
      <Search onSearchChange={OnSearchChange} />
      {weather && <Weather data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
