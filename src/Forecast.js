import React from "react";
import "./css/Forecast.css";
import WeatherIcon from "./WeatherIcon.js";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <WeatherIcon code="01d" size={50} />
          <h5 className="forecast-dayName"> Thu </h5>
          <p className="forecast-temperatures">
            <span className="orecast-temperature-max"> 29° </span>
            <span className="forecast-temperature-min"> 10° </span>
          </p>
        </div>
      </div>
    </div>
  );
}
