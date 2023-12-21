import React, { useState, useEffect } from "react";
import AddCityForm from "../AddCityForm/AddCityForm";
import CityList from "../CityList/CityList";
//import { useParams } from "react-router"
//import axios from 'axios'

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
      //setCity(weatherData)
      setWeather(weatherData);
      console.log(weatherData);
      setSearched(true);
    } catch (err) {
      console.log(err);
    }
  }

//   useEffect(() => {
//     handleRequest();
//   }, []);

//   function addCity(newCity) {
//     setCities([...cities, newCity])
//     console.log(newCity)
// }

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

//   const handleAddCity = () => {
//     if (weather && !cities.includes(weather.name)) {
//         addCity(weather.name)
//     }
//   }

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
            {/* <button onClick={handleAddCity}>Save City</button>
        <ul>
                {cities.map((city, index) => (
                    <li key={index}>{city}</li>
                ))}
            </ul> */}
            {/* <CityList /> */}
            
            <AddCityForm weather={weather} cities={cities}/>
            <CityList cities={cities}/>
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
        <CityList cities={cities} />
      </div>
    );
  }
}

// const parseCity = (data) => {
//     const {lat, long} = cata[coord]
//     const {country = data["sys"]}
//     const output = {}
//     output[]
//     return output
// }

export default WeatherForm;
