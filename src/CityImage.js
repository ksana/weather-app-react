import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CityImage(props) {
  let [imgUrl, setImgUrl] = useState(
    "https://cdn.pixabay.com/photo/2017/08/20/17/44/green-2662561_1280.jpg"
  );
  let [loaded, setLoaded] = useState(false);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function displayCityImage(response) {
    let imgCount = response.data.hits.length;
    setLoaded(true);

    setImgUrl(
      response?.data?.hits[getRandomInt(imgCount)]?.webformatURL ??
        "https://cdn.pixabay.com/photo/2017/08/20/17/44/green-2662561_1280.jpg"
    );
  }

  if (loaded) {
    return (
      <div className="CityImage">
        <img className="cityImage img-fluid" src={imgUrl} alt={props.city} />
      </div>
    );
  } else {
    let imageUrl = `https://pixabay.com/api/?key=33273023-e823ab237982e9cd10b9697f2&q=${props.city}&category=places&image_type=photo&pretty=true&safesearch=true&orientation=horizontal`;
    axios.get(imageUrl).then(displayCityImage);
    return null;
  }
}
