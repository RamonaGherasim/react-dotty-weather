import React, { useState } from "react";
import "./WeatherTemp.css";

export default function WeatherTemp (props ) {
    let [unit, setUnit] = useState ("celsius");

function showFahrenheit (event) {
    event.preventDefault();
    setUnit ("fahrenheit");
}

function showCelsius (event) {
    event.preventDefault();
    setUnit ("celsius");
}

    if (unit === "celsius") {
    return (
        <div className="WeatherTemp">
            <span className="temperature">{Math.round(props.temp)}</span>
            <span className="unit"> °C | <a href="/" onClick={showFahrenheit}>°F</a> </span>
        </div>
    )
        } else {
              let fahrenheit = (props.temp * 9) / 5 + 32
    return (
        <div className="WeatherTemp">
            <span className="temperature">{Math.round(fahrenheit)}</span>
            <span className="unit"> °F | <a href="/" onClick={showCelsius}> °C </a> </span>
        </div>
    )
        }
}