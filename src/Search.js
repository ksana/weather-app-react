import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import Middle from "./Middle";
import axios from "axios";
import Forecast from "./Forecast.js";
import "./css/Search.css";

let apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";

export default function Search(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ loaded: false });

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function showWeather(response) {
    //console.log("search = " + response.data);
    setWeather({
      loaded: true,
      cityName: response.data.name + ", " + response.data.sys.country,
      latitude: response.data.coord.lat,
      longtitude: response.data.coord.lon,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  let form = (
    <form onSubmit={handleSearch} className="searchForm">
      <div className="row">
        <div className="col-8">
          <div className="mb-3">
            <input
              type="search"
              className="form-control"
              placeholder="Enter your city..."
              autoFocus="on"
              onChange={updateCity}
            />
          </div>
        </div>
        <div className="col-1">
          <a href="/" className="currentLocIcon">
            <FontAwesomeIcon icon={faLocationCrosshairs} size="xl" />
          </a>
        </div>
        <div className="col-3">
          <button type="submit" className="btn btn-primary buttonSearch">
            Search
          </button>
        </div>
      </div>
    </form>
  );

  if (weather.loaded) {
    return (
      <div>
        {form}
        <Middle weatherData={weather} />
        <Forecast lon={weather.longtitude} lat={weather.latitude} />
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}
