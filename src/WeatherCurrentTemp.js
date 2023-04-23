import React, { useState } from "react";
import "./css/WeatherCurrentTemp.css";

export default function WeatherCurrentTemp(props) {
  const [unit, setUnit] = useState("celcius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <span className="WeatherCurrentTemp">
        {props.celcius}
        <span className="units">
          °C |
          <a href="/" onClick={convertToFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <span className="WeatherCurrentTemp">
        {Math.round(fahrenheit)}
        <span className="units">
          <a href="/" onClick={convertToCelcius}>
            °C{" "}
          </a>
          | °F
        </span>
      </span>
    );
  }
}
