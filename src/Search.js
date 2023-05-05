import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import Middle from "./Middle";
import axios from "axios";
import Forecast from "./Forecast.js";
import Top from "./Top.js";
import "./css/Search.css";

let apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";

export default function Search(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ loaded: false });

  function handleSearch(event) {
    event.preventDefault();
    let cityReceived = event.target[0].value;

    setCity(cityReceived.trim());
  }

  useEffect(() => {
    search();
    // eslint-disable-next-line
  }, [city]);

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function searchCurrentPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    //console.log(url);
    axios.get(url).then(showWeather);
  }

  function getCurrPosition(event) {
    event.preventDefault();

    navigator.geolocation.getCurrentPosition(searchCurrentPosition);
  }

  function showWeather(response) {
    //console.log("search = " + response.data);
    setWeather({
      loaded: true,
      cityTitle: response.data.name,
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
            />
          </div>
        </div>
        <div className="col-1">
          <a href="/" className="currentLocIcon">
            <FontAwesomeIcon
              icon={faLocationCrosshairs}
              size="xl"
              onClick={getCurrPosition}
            />
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
        <Top setCity={setCity} />
        {form}
        <Middle weatherData={weather} />
        <Forecast lon={weather.longtitude} lat={weather.latitude} />
      </div>
    );
  } else {
    return "Loading....";
  }
}
