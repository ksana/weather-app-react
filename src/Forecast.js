import React, { useState } from "react";
import "./css/Forecast.css";
import WeatherIcon from "./WeatherIcon.js";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  console.log("inside forecast");

  function showForecast(response) {
    console.log("showForecast=" + response);
    setLoaded(true);
  }

  if (loaded) {
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
  } else {
    let apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";
    let latitude = props.lat;
    let longitude = props.lon;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(showForecast);
    return null;
  }
}
