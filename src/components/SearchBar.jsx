import React from "react";
import "../css/SearchBarCSS.css";
import Search from "../assets/search.png";
// import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div>
        <label>From</label>
        <input
          type="text"
          placeholder="Airport or City"
          className="inputField"
          required
        />
      </div>
      <div>
        <label>To</label>
        <input
          type="text"
          placeholder="Airport or City"
          className="inputField"
          required
        />
      </div>
      <div>
        <label>Depart</label>
        <input type="date" className="inputField" required />
      </div>
      <div>
        <label>Return</label>
        <input type="date" className="inputField" required />
      </div>
      <button type="submit">
        <img src={Search} alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
