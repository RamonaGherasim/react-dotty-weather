import React from "react";
import "./WeatherApp.css"
import Conversion from "./Conversion";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Icon from "./Icon";
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
       <div className="HighLowLine">
                  <span className="today-high">H: 14°</span>
                  <span> | </span>
                  <span className="today-low">L: 12°</span>  
        </div>
             </Col>
         </Row>
         <Row>
             <Col>
             <h1>13°</h1>
             </Col>
             <Col>
             <Icon />
             </Col>
         </Row>
         <Row>
             <Col>
           <div className="CityDisplay">
                <h2>London</h2>
          </div>
             </Col>
             <Col>
                <h2>Clear sky</h2>
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