import React from "react";
import Search from "./Search.js";

import "./css/Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <Search defaultCity="Krakow" />
    </div>
  );
}
