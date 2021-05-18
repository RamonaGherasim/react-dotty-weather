import React from "react";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row";

export default function Humidity () {
    return (
        <div className="Humidity">
        <Row>
        <Col xs={8}>
        <p> Humidity </p>
        </Col>
        <Col>
        <p className="percentage"> 43% </p>
        </Col>
        </Row>
        </div>
    );
}