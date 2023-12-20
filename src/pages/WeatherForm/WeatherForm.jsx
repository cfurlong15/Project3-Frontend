import React, { useState, useEffect } from "react";
import AddCityForm from "../AddCityForm/AddCityForm";
//import { useParams } from "react-router"
//import axios from 'axios'

function WeatherForm() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [searched, setSearched] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;
  //const {city} = useParams()

  async function handleRequest() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
      );
      const weatherData = await response.json();
      //setCity(weatherData)
      setWeather(weatherData);
      console.log(weatherData);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleRequest();
  }, []);

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    handleRequest();
    setSearched(true);
  };
  console.log(weather);

  if (searched) {
    return (
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={city}
            onChange={handleChange}
            placeholder="Enter City"
          />
          <button type="submit">Search</button>
        </form>

        <div>
          <h2>{weather.name}</h2>
          <h2>{Math.round(weather?.main?.temp)}&#x2109;</h2>
          <p>Low: {Math.round(weather?.main?.temp_min)}&#x2109;</p>
          <p>High: {Math.round(weather?.main?.temp_max)}&#x2109;</p>
        </div>
        <div>
            <AddCityForm />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={city}
            onChange={handleChange}
            placeholder="Enter City"
          />
          <button type="submit">Search</button>
        </form>

        <p>Search for your city!</p>
      </div>
    );
  }
}

export default WeatherForm;
