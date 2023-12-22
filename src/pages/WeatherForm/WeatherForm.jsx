import React, { useState, useEffect } from "react";
import AddCityForm from "../AddCityForm/AddCityForm";
import CityList from "../CityList/CityList";
import Header from "../../components/Header/Header";

function WeatherForm() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [searched, setSearched] = useState(false);
  const [cities, setCities] = useState([])
  const apiKey = import.meta.env.VITE_API_KEY;


  async function handleRequest() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
      );
      const weatherData = await response.json();
      setWeather(weatherData);
      console.log(weatherData);
      setSearched(true);
    } catch (err) {
      console.log(err);
    }
  }

useEffect(() => {
    const cities = JSON.parse(localStorage.getItem("city"));
    console.log(cities)
    if (cities) {
      setCities(cities);
    }
  }, []);


  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    handleRequest();
  };
  console.log(weather);
  let upperCaseDescription = weather?.weather[0]?.description

  if (searched) {
    return (
      <div className="bg-blue-500 p-6 rounded-2xl opacity-75">
        <form onSubmit={handleSearch}>
          <input
          className="rounded-xl h-8 w-80 text-center bg-blue-800 hover:bg-violet-600"
            type="text"
            value={city}
            onChange={handleChange}
            placeholder="Enter City"
          />
          <button className="bg-blue-800 hover:bg-violet-600 p-1 m-2 w-36" type="submit">Search</button>
        </form>
        
        <div className="">
          <h2 className="text-4xl mb-4">{weather.name}</h2>
          <h2 className="text-3xl">{Math.round(weather?.main?.temp)}&#x2109;</h2>
          <p className="inline-block pr-4 text-2xl">Low: {Math.round(weather?.main?.temp_min)}&#x2109;</p>
          <p className="inline-block text-2xl">High: {Math.round(weather?.main?.temp_max)}&#x2109;</p>
          <h3 className="text-3xl mt-4 mb-4">{upperCaseDescription.charAt(0).toUpperCase() + upperCaseDescription.slice(1)}</h3>
          <p className="mb-8 text-2xl">Wind Speed: {Math.round(weather?.wind?.speed)} MPH</p>
        </div>
        <div>
            <AddCityForm weather={weather} cities={cities}/>
            <CityList cities={cities}/>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-blue-500 p-6 rounded-2xl opacity-75">
        <p>Search for your city!</p>
        <form onSubmit={handleSearch}>
          <input
          className="rounded-xl h-8 w-80 text-center bg-blue-800 hover:bg-violet-600"
            type="text"
            value={city}
            onChange={handleChange}
            placeholder="Enter City"
          />
          <button className="bg-blue-800 hover:bg-violet-600 p-1 m-2 w-36" type="submit">Search</button>
        </form>

        
        <CityList cities={cities} />
      </div>
    );
  }
}

export default WeatherForm;
