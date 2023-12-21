import { useState } from 'react'
import './App.css'
import WeatherForm from './pages/WeatherForm/WeatherForm'
import AddCityForm from './pages/AddCityForm/AddCityForm'
import CityList from './pages/CityList/CityList'
import { Routes, Route } from 'react-router-dom'
import Background from './components/Background/Background'

function App() {
  

  return (
    <div>
      <Background />
      <Routes>
        <Route path="/" element={<WeatherForm />}></Route>
        <Route path="/list" element={<CityList />}></Route>
      </Routes>
      
    </div>
  )
}

export default App
