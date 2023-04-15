import React from "react";
import "./Middle.css";
import "bootstrap/dist/css/bootstrap.css";
import krakow from "./images/krakow.jpg";
import weather from "./images/weather.png";

export default function Middle() {
  let weatherData = {
    city: "Krakow, Poland",
    date: "Sunday, March 26th, 2023",
    weatherCondition: "Cloudy",
    currentTemp: 10,
    humidity: 80,
    wind: 20,
    pressure: 956,
  };
  return (
    <div className="Middle">
      <h1> {weatherData.city}</h1>
      <ul>
        <li>
          <h6>{weatherData.date}</h6>
        </li>
        <li>
          <h6>{weatherData.weatherCondition}</h6>
        </li>
      </ul>
      <br />
      <div className="row">
        <div className="col-5">
          <div className="clearfix weather-temperature">
            <span>
              <img
                src={weather}
                alt={weatherData.weatherCondition}
                className="currentWeather-icon float-left"
              />
            </span>

            <span className="currentTemperature float-left">
              {weatherData.currentTemp}
            </span>
            <span className="units">
              <a href="/" className="active">
                °C{" "}
              </a>
              |<a href="/">°F</a>
            </span>
          </div>
        </div>

        <div className="col-3">
          <ul>
            <li>Wind: {weatherData.wind} m/s</li>
            <li>Humidity: {weatherData.humidity} %</li>
            <li>Pressure: {weatherData.pressure} hPa</li>
          </ul>
        </div>
        <div className="col-4">
          <img className="cityImage img-fluid" src={krakow} alt="Krakow" />
          <small className="current-city-date"></small>
        </div>
      </div>
    </div>
  );
}
