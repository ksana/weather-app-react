import React from "react";
import "./css/Middle.css";
import FormattedDate from "./FormattedDate";
// import krakow from "./images/krakow.jpg";
import WeatherCurrentTemp from "./WeatherCurrentTemp";
import WeatherIcon from "./WeatherIcon.js";
import CityImage from "./CityImage";

export default function Middle(props) {
  // console.log("middle=" + props.weatherData);
  return (
    <div className="Middle">
      <h1> {props.weatherData.cityName}</h1>
      <ul>
        <li>
          <h6>
            <FormattedDate date={props.weatherData.date} />
          </h6>
        </li>
        <li>
          <h6 className="text-capitalize">{props.weatherData.description}</h6>
        </li>
      </ul>
      <br />
      <div className="row">
        <div className="col-4">
          <div className="clearfix weather-temperature">
            <span className="float-left">
              <WeatherIcon code={props.weatherData.icon} size={64} />
            </span>

            <span className="currentTemperature float-left">
              <WeatherCurrentTemp celcius={props.weatherData.temperature} />
            </span>
          </div>
        </div>

        <div className="col-4">
          <ul>
            <li>Wind: {props.weatherData.wind} m/s</li>
            <li>Humidity: {props.weatherData.humidity} %</li>
            <li>Pressure: {props.weatherData.pressure} hPa</li>
          </ul>
        </div>
        <div className="col-4">
          {/* // <img className="cityImage img-fluid" src={krakow} alt="Krakow" /> */}
          <CityImage
            className="cityImage img-fluid"
            city={props.weatherData.cityTitle}
          />
        </div>
      </div>
    </div>
  );
}
