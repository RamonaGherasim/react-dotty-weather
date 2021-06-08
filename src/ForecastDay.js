import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay (props) {
    function maxTemp ( ) {
       let temperature = Math.round(props.data.temp.max);
       return `${temperature}°`   
     }

    function minTemp () {
       let temperature = Math.round(props.data.temp.min);
       return `${temperature}°`
    }

    function day () {
        let date = new Date (props.data.dt * 1000);
        let day = date.getDay ();
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] 

        return days[day]
    }

    return (
        <Row>
            <Col>
                        <p>{day ()}</p>
            </Col>
            <Col>
                        <WeatherIcon data={props.data.weather[0].icon} size={27} /> 
            </Col>
            <Col align-self-end>           
                          <span className="max"> {maxTemp ()} </span>
                          <span className="min"> | {minTemp ()} </span>
            </Col>
            </Row>
    )
}