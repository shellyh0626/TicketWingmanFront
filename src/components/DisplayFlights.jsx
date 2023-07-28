import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayUserFlight, deleteUserFlight } from "../redux/flights/search.action";
import "../css/flightsCard.css"
// import { Link } from "react-router-dom";
// import Weather from "../pages/Weather"
const DisplayFlights = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user);
    const displayFlights = useSelector((state) => state.search.userFlights);
    // useEffect(() => {
    //     dispatch(displayUserFlight(currentUser.id))
    // }, []);

    const convertTime = (dateTime) => {
        return dateTime.slice(0, 16).replace("T", " ");
    };

    const deleteFlight = (id) => {
        dispatch(deleteUserFlight(id, currentUser.id))
    }
    console.log(displayFlights);
    return (
        <div className="flight-container">
            {displayFlights.map((data, i) => {
                return (
                    <div key={i} className="flight-card">
                        <h1>
                            Airline: {data.carrier_code}
                            {data.flight_number}
                        </h1>
                        <p>From: {data.departure_location}</p>
                        <p>Departure Date: {convertTime(data.departure_date)}</p>
                        <p>To: {data.arrival_location}</p>
                        <p>Arrival Date: {convertTime(data.arrival_date)}</p>
                        <button onClick={() => deleteFlight(data.id)}>X</button>
                        {/* <Weather destination= {data.arrival_location}/> */}
                        {/* <Link to = "/weather" state={{destination:data.arrival_location}}>show weather</Link> */}
                    </div>
                );
            })}
        </div>
    );
};
export default DisplayFlights;
