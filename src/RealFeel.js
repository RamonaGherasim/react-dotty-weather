import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function RealFeel () {
    return (
        <div className="RealFeel">
     <Row>
        <Col xs={8}>
        <p> Real feel </p>
        </Col>
        <Col>
        <p className="degrees"> 11° </p>
        </Col>
        </Row>
        </div>
    );
}