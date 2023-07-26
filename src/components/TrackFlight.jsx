import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_FLIGHT_THUNK } from "../redux/track/track.actions";
import "../css/TrackFlight.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

function TrackFlight() {
  const flight = useSelector((state) => state.track.flightData);
  const dispatch = useDispatch();
  const [flightNumber, setFlightNumber] = useState();

  const handleChange = (evt) => {
    setFlightNumber(evt.target.value);
  };

  const handleSubmit = () => {
    if (flightNumber) {
      const flightObject = {
        flight_iata: flightNumber,
      };
      dispatch(FETCH_FLIGHT_THUNK(flightObject));
    }
  };

  const trackFlightCard = () => {
    const flights = flight.data[0];
    return (
      <div id="flightDataContainer">
        <div id="flightDataHeading">
          <h1>{flights.flight.iata}</h1>
          <p>
            {flights.airline.name} ({flights.airline.iata})
          </p>
          <h1>{flights.departure.iata}</h1>
          <p>{flights.departure.airport}</p>
          <FontAwesomeIcon icon={faPlane} size="5x" />
          <h1>{flights.arrival.iata}</h1>
          <p>{flights.arrival.airport}</p>
          <h1>{flights.flight_status}</h1>
        </div>
      </div>
    );
  };

  return (
    <div id="trackFlightContainer">
      <h1 id="trackFlightHeading">Have a Flight?</h1>
      <p id="trackFlightMessage">
        Enter Your Flight Number Below for Departure and Arrival Information,
        Weather Updates, and Travel Advisory Data!
      </p>
      <div className="input-group mb-3 input-group-lg">
        <span className="input-group-text" id="trackIcon">
          <i className="bi bi-airplane"></i>
        </span>
        <input
          type="text"
          name="flightNumber"
          id="flightNumber"
          className="form-control"
          placeholder="Flight Number (e.g. UA2220)"
          onChange={handleChange}
          required
        />
        <button
          type="button"
          id="flightSearchButton"
          className="btn btn-secondary btn-lg"
          onClick={handleSubmit}
        >
          SEARCH FLIGHT
        </button>
      </div>
      {flight ? trackFlightCard() : <h1>No Flight</h1>}
    </div>
  );
}

export default TrackFlight;
