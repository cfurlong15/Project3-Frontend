import WeatherForm from "../WeatherForm/WeatherForm";
import { useState, useEffect } from "react";

function CityList({ cities }) {
  if (cities.length > 0) {
    return (
      <div>
        <h2 className="my-6 text-5xl">My Cities</h2>
        <div>
          {cities.map((weather, index) => {
            let upperCaseDescription = weather?.weather[0]?.description;
            return (
              <div key={index}>
                <h2 className="text-4xl mb-4">{weather.name}</h2>
                <h2 className="text-3xl">
                  {Math.round(weather?.main?.temp)}&#x2109;
                </h2>
                <div className="inline-block">
                  <p className="inline-block pr-4 text-2xl">
                    Low: {Math.round(weather?.main?.temp_min)}&#x2109;
                  </p>
                  <p className="inline-block text-2xl">
                    High: {Math.round(weather?.main?.temp_max)}&#x2109;
                  </p>
                </div>
                <h3 className="text-3xl mt-4 mb-4">
                  {upperCaseDescription.charAt(0).toUpperCase() +
                    upperCaseDescription.slice(1)}
                </h3>
                <p className="mb-16 text-2xl">
                  Wind Speed: {Math.round(weather?.wind?.speed)} MPH
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    <p>Loading...</p>;
  }
}

export default CityList;
