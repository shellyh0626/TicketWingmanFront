import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const data = location.state && location.state.data;

  return (
    <div>
      <h1>Flight Search Results</h1>
      {data && data.length > 0 ? (
        <div>
          {data.map((flight, index) => (
            <div key={index}>
              <h2>Flight {flight.id}</h2>
              <p>Type: {flight.type}</p>
              <p>lastTicketingDate: {flight.lastTicketingDate}</p>
              <p>Number of Bookable Seats: {flight.numberOfBookableSeats}</p>
              {flight.itineraries.map((itinerary, i) => (
                <div key={i}>
                  <h3>Itinerary {i + 1}</h3>
                  <p>Duration: {itinerary.duration}</p>
                  {itinerary.segments.map((segment, j) => (
                    <div key={j}>
                      <h4>Segment {j + 1}</h4>
                      <p>Departure: {segment.departure.iataCode}</p>
                      <p>Arrival: {segment.arrival.iataCode}</p>
                      <p>Carrier: {segment.carrierCode}</p>
                    </div>
                  ))}{" "}
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>Sorry, no results found</p>
      )}
    </div>
  );
};

export default SearchResults;
