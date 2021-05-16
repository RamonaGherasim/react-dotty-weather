import React from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Forecast () {
    return (
        <Row>
            <Col>
                        <p className="forecast-date">Saturday</p>
            </Col>
            <Col>
                        <img
                          src="http://openweathermap.org/img/wn/01d@2x.png"
                          alt=""
                          width="40"
                        />
            </Col>
            <Col>           
                          <span>14° | 5° </span>
            </Col>
            </Row>
    )
}