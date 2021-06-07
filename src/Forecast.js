import React from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast () {
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