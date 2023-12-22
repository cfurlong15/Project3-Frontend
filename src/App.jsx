import { useState } from "react";
import "./App.css";
import WeatherForm from "./pages/WeatherForm/WeatherForm";
import AddCityForm from "./pages/AddCityForm/AddCityForm";
import CityList from "./pages/CityList/CityList";
import { Routes, Route } from "react-router-dom";
import Background from "./components/Background/Background";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Background />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/weather" element={<WeatherForm />}></Route>
        <Route path="/list" element={<CityList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
