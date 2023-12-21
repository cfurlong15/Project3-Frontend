import { useState, useEffect } from "react"

function AddCityForm({weather, cities}) {

    const [city, setCity] = useState([])
    
console.log(weather)
    
      const handleSubmit = (evt) => {
        evt.preventDefault();
        cities.push(weather)
        console.log(weather)
        localStorage.setItem('city', JSON.stringify(cities))
      };

        return(
            <div>
                <form onSubmit={handleSubmit}>
            <button type="submit">Add City</button>
            </form>
            </div>
        )
      }

export default AddCityForm