import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state && location.state.data;
  const [expandedFlightIndex, setExpandedFlightIndex] = useState(-1);

  // Check if data exists and if it is an array
  if (!data || !Array.isArray(data)) {
    return <p>No data</p>;
  }

  const [selectedCabin, setSelectedCabin] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const filteredData = data.filter((flight) => {
    // Filter based on flight cabin
    if (
      selectedCabin &&
      !flight.tickets.departure_ticket.some(
        (ticket) => ticket.cabin === selectedCabin
      )
    ) {
      return false;
    }

    // Filter based on price range
    if (selectedPrice) {
      const price = parseFloat(flight.total_price.total);
      if (selectedPrice === "100-below" && price >= 100) {
        return false;
      } else if (selectedPrice === "100-200" && (price < 100 || price >= 200)) {
        return false;
      } else if (selectedPrice === "200-300" && (price < 200 || price >= 300)) {
        return false;
      } else if (selectedPrice === "300-above" && price < 300) {
        return false;
      }
    }

    return true;
  });

  const toggleFlightInfo = (index) => {
    setExpandedFlightIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const extractTime = (dateTime) => {
    const time = new Date(dateTime);
    return time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "inline-block", marginRight: "20px" }}>
        <label htmlFor="cabinSelect">Cabin: </label>
        <select
          id="cabinSelect"
          value={selectedCabin}
          onChange={(e) => setSelectedCabin(e.target.value)}
        >
          <option value="">Any cabin</option>
          <option value="ECONOMY">Economy</option>
          <option value="BUSINESS">Business</option>
          <option value="PREMIUM_ECONOMY">Premium Economy</option>
          <option value="FIRST">First</option>
        </select>
      </div>
      <div style={{ display: "inline-block" }}>
        <label htmlFor="priceSelect">Price filter: </label>
        <select
          id="priceSelect"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
        >
          <option value="">Any price</option>
          <option value="100-below">100 and below</option>
          <option value="100-200">100 - 200</option>
          <option value="200-300">200 - 300</option>
          <option value="300-above">300 and above</option>
          {/* More options can be add */}
        </select>
      </div>
      <div>
        {filteredData.map((flight, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <button onClick={() => toggleFlightInfo(index)}>
              {expandedFlightIndex === index
                ? "Hide ticket info"
                : "View ticket info"}
            </button>
            <h2>Flight {index + 1}</h2>
            <p>Flight type: {flight.type}</p>
            <p>Is it one way: {flight.oneWay ? "true" : "false"}</p>
            {flight.tickets.departure_ticket.map((ticket, i) => (
              <div
                key={i}
                style={{
                  display: expandedFlightIndex === index ? "block" : "none",
                  border: "1px solid #ccc",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <h3>Ticket {i + 1}</h3>
                <p>Departure: {ticket.departure.iataCode}</p>
                <p>Departure time: {extractTime(ticket.departure.time)}</p>
                <p>Arrival: {ticket.arrival.iataCode}</p>
                <p>Arrival time: {extractTime(ticket.arrival.time)}</p>
                <p>Carrier: {ticket.flight.carrierCode}</p>
                <p>Flight number: {ticket.flight_number}</p>
                <p>Flight duration: {ticket.duration}</p>
                <p>Cabin: {ticket.cabin}</p>
                <p>
                  Layover info:{" "}
                  {ticket.stopovers
                    ? `${ticket.stopovers.length} stop`
                    : "Non stop"}
                </p>
              </div>
            ))}
            <p>Total duration: {flight.total_departure_duration}</p>
            {expandedFlightIndex === index && flight.total_price && (
              <p>
                Price:{flight.total_price.total} {flight.total_price.currency}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
