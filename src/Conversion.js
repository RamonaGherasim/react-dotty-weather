import React from "react";

export default function Conversion ( ) {
    return (
        <div className="Conversion">
                  <a href="#" className="celsius-link active">
                    {" "}
                    °C
                  </a>
                  <span id="CFline"> | </span>
                  <a href="#" className="fahrenheit-link">
                    {" "}
                    °F{" "}
                  </a>
        </div>

    )
}