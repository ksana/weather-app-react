import React, { useState, useEffect } from "react";
import "./css/Forecast.css";
import ForecastDay from "./ForecastDay.js";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  let result = props.lat || props.lon;
  useEffect(() => {
    setLoaded(false);
  }, [result]);

  function showForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 7) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";
    let latitude = props.lat;
    let longitude = props.lon;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
    return null;
  }
}
