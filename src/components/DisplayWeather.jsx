import react ,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {FETCH_WEATHER_F_THUNK,FETCH_WEATHER_C_THUNK} from "../redux/weather/weather.actions"

function DisplayWeather(){
    return (
        <div>
            <h1>hi this is weather displays page</h1>
        </div>
    )
}

export default DisplayWeather;