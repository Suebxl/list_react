import "./styles.css";
import { useState } from "react";
/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {
  const [cities, setCities] = useState(["Rome", "Madrid"]);
  const [city, setCity] = useState("");

  function handleChange(event) {
    setCity(event.target.value);
  }

  function addCities(event) {
    event.preventDefault();
    setCities((prevCities) => {
      return [...prevCities, city];
    });
    setCity("");
  }
  function deleteCity(event) {
    const selectedCity = event.target.name;
    setCities((oldCities) => oldCities.filter((city) => city !== selectedCity));
  }
  console.log(cities);
  const citiesElement = cities.map((city, index) => {
    return (
      <li key={index}>
        {city}{" "}
        <button name={city} onClick={deleteCity}>
          {" "}
          X{" "}
        </button>
      </li>
    );
  });

  return (
    <div className="App">
      <h1 className="title"> Cities to visit</h1>
      <form onSubmit={addCities}>
        <input
          name="city"
          type="text"
          placeholder="add city"
          value={city}
          onChange={handleChange}
        />
        <button type="submit"> add </button>
      </form>
      <ul>{citiesElement}</ul>
    </div>
  );
}
