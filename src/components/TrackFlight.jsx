import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_FLIGHT_THUNK } from "../redux/track/track.actions";
import "../css/TrackFlight.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function TrackFlight() {
  const flight = useSelector((state) => state.track.flightData);
  const dispatch = useDispatch();
  const [flightNumber, setFlightNumber] = useState();

  useEffect(() => {
    if (flightNumber) {
      const flightObject = {
        flight_iata: flightNumber,
      };
      console.log("dispatch: track flight");
      dispatch(FETCH_FLIGHT_THUNK(flightObject));
    }
  }, [flightNumber, dispatch]);

  const handleChange = (evt) => {
    setFlightNumber(evt.target.value);
  };

  const handleSubmit = () => {
    if (flightNumber) {
      const flightObject = {
        flight_iata: flightNumber,
      };
      console.log(flightObject);
      dispatch(FETCH_FLIGHT_THUNK(flightObject));
      console.log(flight);
      console.log(flight.data[0].departure.gate);
    }
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
      {flight ? (
        <h1>Flight {flight.data[0].departure.gate}</h1>
      ) : (
        <h1>No Flight</h1>
      )}
    </div>
  );
}

export default TrackFlight;
