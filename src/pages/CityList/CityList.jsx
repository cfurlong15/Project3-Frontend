import WeatherForm from "../WeatherForm/WeatherForm";
import { useState, useEffect } from "react";

function CityList({cities}) {
  //const [cities, setCities] = useState([]);

//   useEffect(() => {
//     const cities = JSON.parse(localStorage.getItem("city"));
//     console.log(cities)
//     if (cities) {
//       setCities(cities);
//     }
//   }, []);
  if (cities.length > 0){
  return (
    <div>
      {cities.map((weather, index) => {
        return (
          <div key={index}>
            <h2>{weather.name}</h2>
            <h2>{Math.round(weather?.main?.temp)}&#x2109;</h2>
            <p>Low: {Math.round(weather?.main?.temp_min)}&#x2109;</p>
            <p>High: {Math.round(weather?.main?.temp_max)}&#x2109;</p>
          </div>
        );
      })}
    </div>
  );
    } else {
        <p>Loading...</p>
    }
}

export default CityList;
