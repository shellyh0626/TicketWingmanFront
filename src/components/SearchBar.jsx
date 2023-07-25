import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateSearchData,
  searchFlights,
} from "../redux/flights/search.action";
import "../css/SearchBarCSS.css";
import Search from "../assets/search.png";

const SearchBar = (props) => {
  const navigate = useNavigate();
  // Use useState to define data
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [departValue, setDepartValue] = useState("");
  const [returnValue, setReturnValue] = useState("");

  const handleSubmit = () => {
    const requestData = {
      originLocationCode: fromValue,
      destinationLocationCode: toValue,
      departureDate: departValue,
      adults: 1,
    };
    // Add returnDate param to requestData（If it exists）
    if (returnValue) {
      requestData.returnDate = returnValue;
    }
    props.searchFlights(requestData);
  };

  useEffect(() => {
    // Output new data in the console for testing
    console.log("Click on search button then transport data", props.flights);

    // Wait for Redux update data, then redirect to new page
    if (
      props.flights &&
      props.flights.countryData &&
      props.flights.travelAdvisoryData
    ) {
      console.log("Page directed successfully");
      navigate("/SearchResults", { state: { data: props.flights } });
    } else {
      console.log("Page directed unsuccessfully");
    }
  }, [props.flights, navigate]);

  return (
    <div className="search-bar">
      <div>
        <label>From</label>
        <input
          type="text"
          placeholder="Airport or City"
          className="inputField"
          value={fromValue}
          onChange={(e) => setFromValue(e.target.value)} // Update fromValue
          required
        />
      </div>
      <div>
        <label>To</label>
        <input
          type="text"
          placeholder="Airport or City"
          className="inputField"
          value={toValue}
          onChange={(e) => setToValue(e.target.value)} // Update toValue
          required
        />
      </div>
      <div>
        <label>Depart</label>
        <input
          type="date"
          className="inputField"
          value={departValue}
          onChange={(e) => setDepartValue(e.target.value)} // Update departValue
          required
        />
      </div>
      <div>
        <label>Return</label>
        <input
          type="date"
          className="inputField"
          value={returnValue}
          onChange={(e) => setReturnValue(e.target.value)} // Update returnValue
          required
        />
      </div>
      <div>
        <label>Type</label>
        <select>
          <option value="One-way">One-way</option>
          <option value="Roundtrip">Roundtrip</option>
        </select>
      </div>
      <button type="submit" onClick={handleSubmit}>
        <img src={Search} alt="" />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  flights: state.search.flights,
});

const mapDispatchToProps = {
  updateSearchData,
  searchFlights,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
