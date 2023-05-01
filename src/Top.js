import React from "react";
import "./css/Top.css";

export default function Top(props) {
  function showWeather(event) {
    event.preventDefault();

    let city = event.target.name;
    props.setCity(city);
  }

  let cities = ["Dubai", "Barcelona", "Taipei", "Kyiv", "Paris"];
  return (
    <div className="Top">
      <div className="row">
        {cities.map(function (cityNames, index) {
          return (
            <div className="col" key={index}>
              <div className="col city">
                <a
                  href="/"
                  className="up-city-link"
                  onClick={showWeather}
                  name={cities[index]}
                >
                  {cities[index]}
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <br />
    </div>
  );
}
