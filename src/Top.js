import React from "react";
import "./Top.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

export default function Top(props) {
  return (
    <div className="Header">
      <div className="row">
        <div className="col city">
          <a href="/" className="up-city-link">
            Dubai
          </a>
        </div>
        <div className="col city">
          <a href="/" className="up-city-link">
            Barcelona
          </a>
        </div>
        <div className="col city">
          <a href="/" className="up-city-link">
            Taipei
          </a>
        </div>
        <div className="col city">
          <a href="/" className="up-city-link">
            Kyiv
          </a>
        </div>
        <div className="col city">
          <a href="/" className="up-city-link">
            Paris
          </a>
        </div>
      </div>
      <br />
      <form>
        <div className="row">
          <div className="col-8">
            <div className="mb-3">
              <input
                type="search"
                className="form-control"
                placeholder="Enter your city..."
              />
            </div>
          </div>
          <div className="col-1">
            <a href="/" className="currentLocIcon">
              <FontAwesomeIcon icon={faLocationCrosshairs} size="xl" />
            </a>
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-primary buttonSearch">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
