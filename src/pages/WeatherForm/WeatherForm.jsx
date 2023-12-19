import { useState, useEffect } from "react"

function WeatherForm() {

    const [ weather, setWeather ] = useState(null)
    const [ location, setLocation ] = useState(null)


    async function handleRequest() {
        try {
            const response = await fetch `api.openweathermap.org/data/2.5/weather?q=${location}&APPID=7295abf0523266eaa2935cc3a9aa0da1`
            const weatherData = await response.json()
            setLocation(weatherData)
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
        setLocation(evt.target.value)
    }

    const handleSearch = (evt) => {
        evt.preventDefault()
        handleRequest()
    }


    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" value={location} onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
            {weather ? (
                <div>
                    <h2>{weather.location}</h2>
                    <h2>{weather.temp}</h2>
                    <p></p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default WeatherForm