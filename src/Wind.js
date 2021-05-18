import React from "react";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row";

export default function Wind () {
    return (
        <div className="Wind">
        <Row>
        <Col xs={8}>
        <p> Wind </p>
        </Col>
        <Col>
        <p className="speed"> 7km/h </p>
        </Col>
        </Row>
        </div>
    )
}