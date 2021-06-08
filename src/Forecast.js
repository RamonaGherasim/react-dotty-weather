import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast (props) {
  let [loaded, setLoaded] = useState (false);
  let [forecast, setForecast] = useState (null);

  useEffect ( ( ) => {
    setLoaded(false);
  }, [props.coordinates]
  );

function handleResponse (response) {
  setForecast (response.data.daily);
  setLoaded (true);
}

function load () {
   let apiKey="5eabfe88b69ebff8b2d2c1968bc189ae";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    
  axios.get(apiUrl).then(handleResponse);
}

if (loaded) {
  return (
    <div className="Forecast">
      {forecast.map(function(dailyForecast, index) {
       if (index < 5) {
       return ( <ForecastDay data={dailyForecast} />)
       } else {
         return null;
       }
      })}
    </div>
    )
} else {
load ()

return null;
}
}