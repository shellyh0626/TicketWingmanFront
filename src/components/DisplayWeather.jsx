import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_WEATHER_F_THUNK, FETCH_WEATHER_C_THUNK } from "../redux/weather/weather.actions"

function DisplayWeather() {
    const weather = useSelector((state) => state.weather.tempInFahrenheit);
    const dispatch = useDispatch();
    useEffect(() => {
        const weatherObject = {
            locationName: "Berlin",
            date1: "2023-01-01",
            date2: "2023-07-08"
        };
        dispatch(FETCH_WEATHER_F_THUNK(weatherObject));
    }, []);
    return (
        <div>
            <h1>hi this is weather displays page</h1>
        </div>
    )
}

export default DisplayWeather;