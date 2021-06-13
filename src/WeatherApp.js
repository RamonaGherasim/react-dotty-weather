import React, { useState } from "react";
import "./WeatherApp.css"
import WeatherTemp from "./WeatherTemp";
import WeatherIcon from "./WeatherIcon";
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
            coordinates: response.data.coord,
            tempMin: response.data.main.temp_min,
             tempMax: response.data.main.temp_max,
            city: response.data.name,     
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
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
    event.preventDefault();
    search ();
  }

  function handleCityChange (event){
  setCity(event.target.value);

}
    
if (weatherData.ready) {
    return (     
    <div className="WeatherApp">
         <Container>
         <Row>
         
         <Col>
         <Row>
             <Col>         
       <div className="HighLowLine">
                  <span className="today-high"><strong>H: </strong>{Math.round(weatherData.tempMax)}°C</span>
                  <span> | </span>
                  <span className="today-low"><strong>L: </strong>{Math.round(weatherData.tempMin)}°C</span>  
        </div>
             </Col>
         </Row>
         <Row>
             <Col>
             <WeatherTemp temp={weatherData.temperature} />
             </Col>
             <Col>
           
                 <div className="Icon">
                      <WeatherIcon data={weatherData.icon} size={110} />
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

      <Forecast coordinates={weatherData.coordinates}/>

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