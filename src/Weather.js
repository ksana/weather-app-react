import React from "react";
import Top from "./Top.js";
import Search from "./Search.js";
import Forecast from "./Forecast.js";
import "./css/Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <Top />
      <Search defaultCity="Krakow" />
      <Forecast />
    </div>
  );
}
