import React from "react";
import "./Top.css";

export default function Top(props) {
  function showWeather(event) {
    event.preventDefault();

    alert("Weather display coming soon....");
  }

  return (
    <div className="Top">
      <div className="row">
        <div className="col city">
          <a href="/" className="up-city-link" onClick={showWeather}>
            Dubai
          </a>
        </div>
        <div className="col city">
          <a href="/" className="up-city-link" onClick={showWeather}>
            Barcelona
          </a>
        </div>
        <div className="col city">
          <a href="/" className="up-city-link" onClick={showWeather}>
            Taipei
          </a>
        </div>
        <div className="col city">
          <a href="/" className="up-city-link" onClick={showWeather}>
            Kyiv
          </a>
        </div>
        <div className="col city">
          <a href="/" className="up-city-link" onClick={showWeather}>
            Paris
          </a>
        </div>
      </div>
      <br />
    </div>
  );
}
