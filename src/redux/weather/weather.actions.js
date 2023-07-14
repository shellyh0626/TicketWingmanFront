import axios from "axios";
import weatherActionTypes from "./weather.types";

export const FETCH_WEATHER_F = (payload) =>{
    return{
        type:weatherActionTypes.weatherTempF,
        payload:payload
    }
}

export const FETCH_WEATHER_F_THUNK = (weatherObject) => {
    return async (dispatch) => {
        try {
          console.log("fetch weather data in fahrenheit started");
          const result = await axios.get("http://localhost:8080/api/weather/displayInFahrenheit",{weatherObject});
          console.log("fetch weather data in fahrenheit COMPLETED")
          console.log(result);
          dispatch(FETCH_WEATHER_F(result));
        } catch (err) {
          console.error(err);
        }
      };
}
