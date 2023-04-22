import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function CodeLink() {
  return (
    <div>
      This page is coded by Oksana M, see code in
      <a href="https://github.com/ksana/weather-app-react">
        {" "}
        <FontAwesomeIcon icon={faGithub} color="black" size="xl" />
      </a>
    </div>
  );
}
