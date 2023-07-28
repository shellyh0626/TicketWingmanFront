import React from "react";
import DisplayFlights from "../components/DisplayFlights";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function UserFlights() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        <Button className="btn btn-primary btn-lg">
          <Link
            to="/newFlights"
            style={{ color: "white", textDecoration: "none" }}
          >
            Add new flight
          </Link>
        </Button>
      </div>
      <DisplayFlights />
    </div>
  );
}

export default UserFlights;
