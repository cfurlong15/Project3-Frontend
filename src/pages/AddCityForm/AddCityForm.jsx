import { useState, useEffect } from "react";
import WeatherForm from "../WeatherForm/WeatherForm";

function AddCityForm({ weather, cities }) {
  const [city, setCity] = useState([]);

  console.log(weather);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    cities.push(weather);
    localStorage.setItem("city", JSON.stringify(cities));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button
          className="bg-blue-800 hover:bg-violet-600 p-1 m-2 w-40"
          type="submit"
        >
          Add City to Your List
        </button>
      </form>
    </div>
  );
}

export default AddCityForm;
