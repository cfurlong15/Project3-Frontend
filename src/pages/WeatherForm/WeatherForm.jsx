import React, { useState, useEffect } from "react"
//import { useParams } from "react-router"
//import axios from 'axios'

function WeatherForm() {

    const [ weather, setWeather ] = useState(null)
    const [ city, setCity ] = useState("")
    const apiKey = import.meta.env.VITE_API_KEY
    //const {city} = useParams()
    

    async function handleRequest() {
        try {
            
            
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`)
            const weatherData = await response.json()
            //setCity(weatherData)
            setWeather(weatherData)
            console.log(weatherData)
        }catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleRequest()
    }, [])

    const handleChange = (evt) => {
        setCity(evt.target.value)
    }

    const handleSearch = (evt) => {
        evt.preventDefault()
        handleRequest()
    }


    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" value={city} onChange={handleChange} placeholder="Enter City" />
                <button type="submit">Search</button>
            </form>
            {weather ? (
                <div>
                    <h2>{weather.name}</h2>
                    <h2>{weather?.main?.temp}</h2>
                    <p>Low: {weather?.main?.temp_min}</p>
                    <p>High: {weather?.main?.temp_max}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default WeatherForm