import React from "react";
import "./HighLowLine.css"

export default function HighLowLine () {
    return (
       <div className="HighLowLine">
                  <span className="today-high">H: 14°</span>
                  <span> | </span>
                  <span className="today-low">L: 12°</span>  
        </div>
    
    );
}
