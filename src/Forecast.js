import React from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./Forecast.css";

export default function Forecast () {
    return (
      <div className="Forecast">
        <Row>
            <Col>
                        <p>Saturday</p>
            </Col>
            <Col>
                        <img
                          src="http://openweathermap.org/img/wn/01d@2x.png"
                          alt="Sunny"
                          width="40"
                        />
            </Col>
            <Col>           
                          <span>14° </span>
                          <span className="min"> | 5° </span>
            </Col>
            </Row>
            </div>
    )
}