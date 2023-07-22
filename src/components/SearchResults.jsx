import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state && location.state.data;
  console.log("New " + data);
  // Check if data exists and if it is and array
  if (!data || !Array.isArray(data)) {
    return <p>No data</p>;
  }

  // Move useState before conditional statement
  const [selectedCabin, setSelectedCabin] = useState("");

  const filteredData = selectedCabin
    ? data.filter((flight) =>
        flight.tickets.departure_ticket.some(
          (ticket) => ticket.cabin === selectedCabin
        )
      )
    : data;

  return (
    <div>
      <h1>New Page</h1>
      <div>
        <label htmlFor="cabinSelect">Cabin: </label>
        <select
          id="cabinSelect"
          value={selectedCabin}
          onChange={(e) => setSelectedCabin(e.target.value)}
        >
          <option value="">All</option>
          <option value="ECONOMY">Economy</option>
          <option value="BUSINESS">Business</option>
        </select>
      </div>
      {filteredData.map((flight, index) => (
        <div key={index}>
          <h2>Flight {index + 1}</h2>
          <p>Flight type: {flight.type}</p>
          <p>Is is one way: {flight.oneWay.toString()}</p>
          <p>Last ticketing date: {flight.lastTicketingDate}</p>
          <p>Seats: {flight.numberOfBookableSeats}</p>
          {flight.tickets.departure_ticket.map((ticket, i) => (
            <div key={i}>
              <h3>Ticket {i + 1}</h3>
              <p>Departure: {ticket.departure.iataCode}</p>
              <p>Arrival: {ticket.arrival.iataCode}</p>
              <p>Carrier: {ticket.flight.carrierCode}</p>
              <p>Flight number: {ticket.flight_number}</p>
              <p>Duration: {ticket.duration}</p>
              <p>Cabin: {ticket.cabin}</p>
            </div>
          ))}
          <p>Total duration: {flight.total_departure_duration}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
