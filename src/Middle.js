import React from "react";
import "./Middle.css";
import krakow from "./images/krakow.jpg";

export default function Middle(props) {
  return (
    <div className="Middle">
      <h1> {props.weatherData.cityName}</h1>
      <ul>
        <li>
          <h6>{props.weatherData.date}</h6>
        </li>
        <li>
          <h6>{props.weatherData.description}</h6>
        </li>
      </ul>
      <br />
      <div className="row">
        <div className="col-5">
          <div className="clearfix weather-temperature">
            <span>
              <img
                src={props.weatherData.icon}
                alt={props.weatherData.description}
                className="currentWeather-icon float-left"
              />
            </span>

            <span className="currentTemperature float-left">
              {props.weatherData.temperature}
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
            <li>Wind: {props.weatherData.wind} m/s</li>
            <li>Humidity: {props.weatherData.humidity} %</li>
            <li>Pressure: {props.weatherData.pressure} hPa</li>
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
