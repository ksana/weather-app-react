import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import Middle from "./Middle";
import axios from "axios";
import "./css/Search.css";
import krakow from "./images/krakow.jpg";
import weatherIcon from "./images/weather.png";

let apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";

export default function Search(props) {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function handleSearch(event) {
    event.preventDefault();

    if (city) {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(url).then(showWeather);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setLoaded(true);
    console.log(response.data);
    setWeather({
      cityName: response.data.name + ", " + response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      date: "Sunday, April 16th, 2023",
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
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

  let weatherData = {
    cityName: "Krakow, PL",
    date: "Sunday, April 16th, 2023",
    description: "Cloudy",
    temperature: 10,
    humidity: 80,
    wind: 20,
    pressure: 956,
    icon: `${weatherIcon}`,
    cityImage: `${krakow}`,
  };

  if (loaded) {
    return (
      <div>
        {form}
        <Middle weatherData={weather} />
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <Middle weatherData={weatherData} />
      </div>
    );
  }
}
