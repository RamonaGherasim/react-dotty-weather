import React from "react";
import "./DateTime.css";
import Row from "react-bootstrap/Row"

export default function DateTime (props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] 
    let day = days[props.date.getDay()];
     let date = props.date.getDate ();
     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
     let month = months[props.date.getMonth()];
     let hours = props.date.getHours ();
     if (hours<10) {
         hours = `0${hours}`
     }
     let minutes = props.date.getMinutes ();
     if (minutes<10) {
         minutes = `0${minutes}`
     }

    return (
        <Row>
        <div className="DateTime">
           
    <p> 
        Last updated on {day}, {date} {month} at {hours}:{minutes}
    </p>
    </div>
    </Row>
    );
}