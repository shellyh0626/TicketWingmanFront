import React from "react";
import DisplayFlights from "../components/DisplayFlights";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function UserFlights() {
  return (
    <div>
      <Button>
        <Link to="/newFlights" style={{'color' : 'white', 'text-decoration' : 'none'}}> 
          Add new flight
        </Link>
      </Button>
      <DisplayFlights/>
    </div>
  );
}

export default UserFlights;