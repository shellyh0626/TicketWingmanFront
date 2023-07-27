import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayUserFlight } from "../redux/flights/search.action";
// import { Link } from "react-router-dom";
import Weather from "../pages/Weather"
const DisplayFlights = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user);
    const displayFlights = useSelector((state) => state.search.userFlights);
    useEffect(() => {
        dispatch(displayUserFlight(currentUser.id))
    }, []);

    return (
        <div>
            {displayFlights.map(data => {
                return (
                    <div>
                        <h1>Airline: {data.carrier_code}{data.flight_number}</h1>
                        <p>From: {data.departure_location}</p>
                        <p>{data.departure_date}</p>
                        <p>{data.arrival_date}</p>
                        <p>{data.arrival_location}</p>
                        <p>{data.emissions}</p>
                        <Weather destination= {data.arrival_location}/>
                        {/* <Link to = "/weather" state={{destination:data.arrival_location}}>show weather</Link> */}
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayFlights;