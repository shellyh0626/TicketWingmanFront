import axios from "axios";
import weatherActionTypes from "./weather.types";

export const FETCH_WEATHER_F = (payload) => {
    return {
        type: weatherActionTypes.weatherTempF,
        payload: payload
    }
}

export const FETCH_WEATHER_C = (payload) => {
    return {
        type: weatherActionTypes.weatherTempC,
        payload: payload
    }
}
// example of weatherObject shown below
// date1 is the starting date of the weather range that user wants to know
// date2 is the ending date of the weather range that user wants to know
// weatherObject = {
//     locationName:"Berlin",
//     date1:"2023-01-01",
//     date2: "2023-07-08"
// };
export const FETCH_WEATHER_F_THUNK = (weatherObject) => {
    console.log(weatherObject);
    return async (dispatch) => {
        try {
            console.log("fetch weather data in Fahrenheit started");
            const result = await axios.post("http://localhost:8080/api/weather/displayInFahrenheit", weatherObject );
            console.log("fetch weather data in Fahrenheit COMPLETED")
            console.log(result);
            dispatch(FETCH_WEATHER_F(result));
        } catch (err) {
            console.error(err);
        }
    };
}

export const FETCH_WEATHER_C_THUNK = (weatherObject) => {
    return async (dispatch) => {
        try {
            console.log("fetch weather data in Celsius started");
            const result = await axios.post("http://localhost:8080/api/weather/displayInCelsius", weatherObject );
            console.log("fetch weather data in Celsius COMPLETED")
            console.log(result);
            dispatch(FETCH_WEATHER_C(result));
        } catch (err) {
            console.error(err);
        }
    };
}