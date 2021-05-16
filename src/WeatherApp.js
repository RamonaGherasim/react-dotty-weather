import React from "react";
import Conversion from "./Conversion";
import HighLowLine from "./HighLowLine";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CurrentTempDisplay from "./CurrentTempDisplay";
import Icon from "./Icon";
import CityDisplay from "./CityDisplay";
import Description from "./Description";



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
         <Row>
             <Col>
             <CurrentTempDisplay />
             </Col>
             <Col>
             <Icon />
             </Col>
         </Row>
         <Row>
             <Col>
             <CityDisplay />
             </Col>
             <Col>
             <Description />
             </Col>
         </Row>

     </Container>
    </div>
        
            

    )
}