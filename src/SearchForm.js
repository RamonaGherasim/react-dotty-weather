import React from "react";
import "./SearchForm.css"

export default function SearchForm () {
    return (
        <form>
                <input
                  type="text"
                  placeholder="Enter a location here"
                  id="search-box"
                  autoComplete="off"
                  autoFocus="on"
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
    );
}