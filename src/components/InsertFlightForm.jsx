import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayUserFlight } from "../redux/flights/search.action";

const InsertFlightForm = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user);
    const displayFlights = useSelector((state) => state.search.userFlights);

    return (
        <div>
            
        </div>
    )
}

export default InsertFlightForm;