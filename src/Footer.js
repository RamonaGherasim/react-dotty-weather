import React from "react";
import "./Footer.css";

export default function Footer ( ) {
    return (
        <div className="Footer">
                <span>
        This project was coded by <strong>Ramona Gherasim</strong> and is
        <a
          rel="noreferrer"
          href="https://github.com/RamonaGherasim/react-dotty-weather"
          target="_blank"
        >
          <span> open-sourced on GitHub </span>
        </a>
        and hosted on
        <a
          rel="noreferrer"
          href="https://focused-cray-4adf51.netlify.app/"
          target="_blank"
        >
          <span> Netlify </span>
        </a>
      </span>
      </div>
    )
}