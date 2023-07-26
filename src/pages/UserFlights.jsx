import React from "react";
import DisplayFlights from "../components/DisplayFlights";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserFlights() {
  return (
    <div>
      <h1>Hello! this is user's flights page</h1>
      <DisplayFlights/>
      <Button>
        <Link to="/newFlights" style={{'color' : 'white', 'text-decoration' : 'none'}}> 
          Add new flight
        </Link>
      </Button>
    </div>
  );
}

export default UserFlights;