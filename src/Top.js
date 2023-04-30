import React from "react";
import "./css/Top.css";

export default function Top(props) {
  function showWeather(event) {
    event.preventDefault();

    console.log(event.target.name);
  }

  return (
    <div className="Top">
      <div className="row">
        <div className="col city">
          <a
            href="/"
            className="up-city-link"
            onClick={showWeather}
            name="Dubai"
          >
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
