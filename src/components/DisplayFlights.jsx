import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayUserFlight } from "../redux/flights/search.action";

const DisplayFlights = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user);
    const displayFlights = useSelector((state) => state.search.userFlights);
    useEffect(() => {
        dispatch(displayUserFlight(currentUser.id))
    }, []);

    return (
        <div>
            <h1>
                Hi! this is display user's flight page
            </h1>
            {displayFlights.map(data => {
                return (
                    <div>
                        <h1>Airline: {data.carrier_code}{data.flight_number}</h1>
                        <p>{data.departure_date}</p>
                        <p>{data.departure_location}</p>
                        <p>{data.arrival_date}</p>
                        <p>{data.arrival_location}</p>
                        <p>{data.emissions}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayFlights;