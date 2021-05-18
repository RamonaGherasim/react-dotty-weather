import React from "react";
import "./WeatherApp.css"
import Conversion from "./Conversion";
import HighLowLine from "./HighLowLine";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CurrentTempDisplay from "./CurrentTempDisplay";
import Icon from "./Icon";
import CityDisplay from "./CityDisplay";
import Description from "./Description";
import DateTime from "./DateTime";
import SearchForm from "./SearchForm";
import RealFeel from "./RealFeel";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Forecast from "./Forecast";
import Footer from "./Footer";



export default function WeatherApp ( ) {
    return (
        <div>
  <div className="WeatherApp">
     <Container>
         <Row>
         
         <Col>
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
         <Col>
             <DateTime />
             </Col>
         </Col>

        <Col>
         <Col>
         <SearchForm />
         <hr />
         </Col>

         <Row>
             <RealFeel />
         </Row>
         <Row>
             <Humidity />
         </Row>
         <Row>
             <Wind />
         </Row>
       
       <hr /> 

       <Forecast />
       <Forecast />
      <Forecast />
      <Forecast />
               <Forecast />
    
    </Col>
    </Row>
    
     </Container>
    </div>

    <Footer />
    </div>
        
            

    )
}