import React, { useState } from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast (props) {
  let [loaded, setLoaded] = useState (false);
  let [forecast, setForecast] = useState (null);

function handleResponse (response) {
  setForecast (response.data.daily);
  setLoaded (true);
}

if (loaded) {
  return (
    <div className="Forecast">
      <ForecastDay data={forecast[0]} />    
    </div>
    )
} else {
  let apiKey="5eabfe88b69ebff8b2d2c1968bc189ae";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    
  axios.get(apiUrl).then(handleResponse)
 
  return null;
}
}