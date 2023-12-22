import WeatherForm from "../WeatherForm/WeatherForm";
import { useState, useEffect } from "react";

function CityList({cities}) {

    
  
  if (cities.length > 0){
  return (
    <div>
      <h2>My Cities</h2>
    <div>
      {cities.map((weather, index) => {
        let upperCaseDescription = weather?.weather[0]?.description
        return (
          <div key={index}>
            <h2 className="text-2xl">{weather.name}</h2>
            <h2>{Math.round(weather?.main?.temp)}&#x2109;</h2>
            <div className="inline-block">
            <p className="inline-block pr-4">Low: {Math.round(weather?.main?.temp_min)}&#x2109;</p>
            <p className="inline-block">High: {Math.round(weather?.main?.temp_max)}&#x2109;</p>
            </div>
            <h3>{upperCaseDescription.charAt(0).toUpperCase() + upperCaseDescription.slice(1)}</h3>
            <p className="mb-8">Wind Speed: {Math.round(weather?.wind?.speed)} MPH</p>
          </div>
        );
      })}
    </div>
    </div>
  );
    } else {
        <p>Loading...</p>
    }
}

export default CityList;
