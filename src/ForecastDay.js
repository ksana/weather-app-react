import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="ForecastDay">
      <WeatherIcon code={props.data.weather[0].icon} size={50} />
      <h5 className="forecast-dayName"> {day()} </h5>
      <p className="forecast-temperatures">
        <span className="orecast-temperature-max"> {maxTemp()}° </span>
        <span className="forecast-temperature-min"> {minTemp()}° </span>
      </p>
    </div>
  );
}
