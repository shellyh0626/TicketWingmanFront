import React from "react";
import SearchBar from "../components/SearchBar";
import DisplayWeather from "../components/DisplayWeather";
import EmissionCalculator from "../components/EmissionCalculator";
function TicketSearch() {
  return (
    <div>
      <SearchBar />
      <DisplayWeather />
      <EmissionCalculator />
    </div>
  );
}

export default TicketSearch;
