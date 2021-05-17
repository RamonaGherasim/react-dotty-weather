import React from "react";

export default function Footer ( ) {
    return (
        <span>
        This project was coded by <strong>Ramona Gherasim</strong> and is
        <a
          rel="noreferrer"
          id="githubLink"
          href="https://github.com/RamonaGherasim/react-dotty-weather"
          target="_blank"
        >
          <span> open-sourced on GitHub </span>
        </a>
        and hosted on
        <a
          rel="noreferrer"
          id="netlifyLink"
          href="https://focused-cray-4adf51.netlify.app/"
          target="_blank"
        >
          <span> Netlify </span>
        </a>
      </span>
    )
}