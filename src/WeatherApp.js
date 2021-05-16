import React from "react";
import Conversion from "./Conversion";
import HighLowLine from "./HighLowLine";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


export default function WeatherApp ( ) {
    return (
  <div className="WeatherApp">
     <Container>
         <Row>
             <Col>
             <Conversion />
             </Col>
             <Col>
             <HighLowLine />
             </Col>
         </Row>

     </Container>
    </div>
        
            

    )
}