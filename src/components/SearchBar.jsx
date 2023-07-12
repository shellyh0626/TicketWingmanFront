import React from "react";
import "../css/SearchBarCSS.css";
import Search from "../image/search.png";
// import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div>
        <input type="text" placeholder="Where From?" className="inputField" />
      </div>
      <div>
        <input type="text" placeholder="Where To?" className="inputField" />
      </div>
      <div>
        <input type="text" placeholder="Starting Date" className="inputField" />
      </div>
      <div>
        <input type="text" placeholder="Ending Date" className="inputField" />
      </div>
      <button type="submit">
        <img src={Search} alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
