import { useState, useEffect } from "react"

function AddCityForm({weather, cities}) {

    const [city, setCity] = useState([])
    // const [rendered, setRendered] = useState(false)
    // const apiKey = import.meta.env.VITE_API_KEY;
console.log(weather)
//setCity([weather, ...city])
    // async function handleRequest() {
    //     try {
    //       const response = await fetch(
    //         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
    //       );
    //       const cityData = await response.json();
    //       setCity(cityData);
    //       console.log(cityData);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }

    //   useEffect(() => {
    //     handleRequest();
    //   }, []);

    //   useEffect(() => {
    //     localStorage.setItem('city', JSON.stringify(city))
    //   }, [])

    //   const handleChange = (evt) => {
    //     setCity(evt.target.city);
    //   };
    //let cities = []
    
      const handleSubmit = (evt) => {
        evt.preventDefault();
        cities.push(weather)
        console.log(weather)
        localStorage.setItem('city', JSON.stringify(cities))
        //handleRequest();
        //setRendered(true);
      };

    // //   if (rendered) {
    // // return (
    // //     <div>
    // //         <div>
                
    // //         </div>
    // //     <div>
    // //       <h2>{city?.name}</h2>
    // //       <h2>{Math.round(city?.main?.temp)}&#x2109;</h2>
    // //       <p>Low: {Math.round(city?.main?.temp_min)}&#x2109;</p>
    // //       <p>High: {Math.round(city?.main?.temp_max)}&#x2109;</p>
    // //     </div>
    // //     </div>
    // // )
    //   } else {
        return(
            <div>
                <form onSubmit={handleSubmit}>
            <button type="submit">Add City</button>
            </form>
            </div>
        )
      }
//}

export default AddCityForm