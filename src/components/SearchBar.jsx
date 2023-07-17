import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/SearchBarCSS.css";
import Search from "../assets/search.png";

const SearchBar = () => {
  const navigate = useNavigate();
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [departValue, setDepartValue] = useState("");
  const [returnValue, setReturnValue] = useState("");

  const handleSubmit = () => {
    const apiUrl = "http://localhost:8080/api/flights/search";
    const requestData = {
      originLocationCode: fromValue,
      destinationLocationCode: toValue,
      departureDate: departValue,
      adults: 1,
    };
    //Sample search bar input:
    //From: SYD
    //To: BKK
    //Depart: 08/02/2023
    //Return: It can be any date, return date does not affect result

    //Testing for get request:
    // http://localhost:8080/api/flights/search?originLocationCode=fromValue&destinationLocationCode=toValue&departureDate=departValue
    const searchParams = new URLSearchParams(requestData);
    const urlWithParams = `${apiUrl}?${searchParams}`;
    fetch(apiUrl + "?" + new URLSearchParams(requestData))
      .then((response) => response.json())
      .then((data) => {
        navigate("/searchResults", { state: { data } }); //Jump to new page
      })
      .catch((error) => {
        console.error(error);
        // Handle request errors
      });
  };

  return (
    <div className="search-bar">
      <div>
        <label>From</label>
        <input
          type="text"
          placeholder="Airport"
          className="inputField"
          value={fromValue}
          onChange={(e) => setFromValue(e.target.value)}
          required
        />
      </div>
      <div>
        <label>To</label>
        <input
          type="text"
          placeholder="Airport"
          className="inputField"
          value={toValue}
          onChange={(e) => setToValue(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Depart</label>
        <input
          type="date"
          className="inputField"
          value={departValue}
          onChange={(e) => setDepartValue(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Return</label>
        <input
          type="date"
          className="inputField"
          value={returnValue}
          onChange={(e) => setReturnValue(e.target.value)}
          required
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        <img src={Search} alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
