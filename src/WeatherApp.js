import React, { useState } from "react";
import "./WeatherApp.css"
import Conversion from "./Conversion";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import DateTime from "./DateTime";
import Forecast from "./Forecast";
import axios from "axios";
import { Container } from "react-bootstrap";



export default function WeatherApp (props ) {
    const [weatherData, setWeatherData] = useState({ ready : false});
    const [city, setCity] = useState (props.defaultCity);
    
    function handleResponse (response) {
         setWeatherData ({
            ready: true,
            city: response.data.name,     
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            date: new Date(response.data.dt * 1000),
            realFeel: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
    })
    }

  function search (){
    const apiKey = "5eabfe88b69ebff8b2d2c1968bc189ae";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
  }
   
  function handleSubmit(event){
    event.prevenDefault();
  }

  function handleCityChange (event){
  setCity(event.target.value);
  search ();
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
             <DateTime date={weatherData.date}/>
             </Col>
         </Col>

        <Col>
         <Col>
         <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter a location here"
                  id="search-box"
                  autoComplete="off"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
                <button
                  type="sumbit-button"
                  className="btn btn-outline-secondary"
                >
                  <i className="fas fa-search-location"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  id="my-location-button"
                >
                  <i className="fas fa-map-marker-alt"></i>
                </button>
              </form>
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
    search ();
    return "Loading..."
}   
}