import { useState } from "react"

function AddCityForm() {

    const [cities, setCities] = useState([])

    function addCity(newCity) {
        setCities([...cities, newCity])
    }



    return (
        <div>
            {/* <h2>City List</h2> */}
            <ul>
                {cities.map((city, index) => (
                    <li key={index}>{city}</li>
                ))}
            </ul>
            <form onSubmit={(evt) => {
                evt.preventDefault()
                const newCity = evt.target.elements.city.value
                addCity(newCity)
                evt.target.reset()
            }}>
                <input type="text" name="city" placeholder="Enter city"></input>
                <button type="submit">Add City</button>
            </form>
        </div>
    )
}

export default AddCityForm