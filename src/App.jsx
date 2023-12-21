import { useState } from 'react'
import './App.css'
import WeatherForm from './pages/WeatherForm/WeatherForm'
import AddCityForm from './pages/AddCityForm/AddCityForm'
import CityList from './pages/CityList/CityList'
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<WeatherForm />}></Route>
        <Route path="/list" element={<CityList />}></Route>
      </Routes>
    </div>
  )
}

export default App
