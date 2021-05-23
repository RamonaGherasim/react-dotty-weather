import React, { useState } from "react";
import "./WeatherApp.css"
import Conversion from "./Conversion";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import DateTime from "./DateTime";
import SearchForm from "./SearchForm";
import Forecast from "./Forecast";
import axios from "axios";
import { Container } from "react-bootstrap";



export default function WeatherApp (props ) {
    const [weatherData, setWeatherData] = useState({ ready : false});
    
    function handleResponse (response) {
         setWeatherData ({
            ready: true,
            city: response.data.name,     
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            date: "Last updated on Friday, 23 April at 18:38",
            realFeel: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
    })
    }
    
if (weatherData.ready) {
    return (
       
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
             <h1 className="temperature">{Math.round(weatherData.temperature)}°</h1>
             </Col>
             <Col>
                 <div className="Icon">
        <div className="clearfix">
     <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    className="icon"
                  />
                  </div>
                  </div>
             </Col>
         </Row>
         <Row>
             <Col>
             <div className="clearfix">
                <h2 className="cityDisplay">{weatherData.city}</h2>
                </div>
             </Col>
             <Col>
                <h2>{weatherData.description}</h2>
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
               <div className="RealFeel">
     <Row>
        <Col xs={8}>
        <p> Real feel </p>
        </Col>
        <Col>
        <p className="degrees"> {Math.round(weatherData.realFeel)}° </p>
        </Col>
        </Row>
        </div>
         </Row>
         <Row>
             <div className="Humidity">
        <Row>
        <Col xs={8}>
        <p> Humidity </p>
        </Col>
        <Col>
        <p className="percentage"> {weatherData.humidity}% </p>
        </Col>
        </Row>
        </div>
         </Row>
         <Row>
             <div className="Wind">
        <Row>
        <Col xs={8}>
        <p> Wind </p>
        </Col>
        <Col>
        <p className="speed"> {Math.round(weatherData.wind)} km/h </p>
        </Col>
        </Row>
        </div>
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
);
} else {
  const apiKey = "5eabfe88b69ebff8b2d2c1968bc189ae";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
    return "Loading..."
}   
}