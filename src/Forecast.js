import React from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast () {
  let apiKey="5eabfe88b69ebff8b2d2c1968bc189ae";
  let latitude = 51.5;
  let longitude = 0.12;
  let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    return (
      <div className="Forecast">
        <Row>
            <Col>
                        <p>Saturday</p>
            </Col>
            <Col>
           <WeatherIcon data="01d" size={27} /> 
            </Col>
            <Col align-self-end>           
                          <span className="max">14° </span>
                          <span className="min"> | 5° </span>
            </Col>
            </Row>
            </div>
    )
}