import axios from "axios";
import weatherActionTypes from "./weather.types";

export const FETCH_WEATHER_F = (payload) =>{
    return{
        type:weatherActionTypes.weatherTempF,
        payload:payload
    }
}
