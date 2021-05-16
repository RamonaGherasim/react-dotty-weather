import React from "react";
import "./Conversion.css"

export default function Conversion ( ) {
    return (
        <div className="Conversion">
                  <span href="#" className="celsius-link active">
                    {" "}
                    °C
                  </span>
                  <span id="CFline"> | </span>
                  <span href="#" className="fahrenheit-link">
                    {" "}
                    °F{" "}
                  </span>
        </div>

    )
}