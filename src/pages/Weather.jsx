import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_WEATHER_F_THUNK, FETCH_WEATHER_C_THUNK } from "../redux/weather/weather.actions";
import DisplayWeather from "../components/DisplayWeather";

function Weather() {
    let weather = useSelector((state) => state.weather.weatherTemp);
    const dispatch = useDispatch();
    useEffect(() => {
        const weatherObject = {
            locationName: "JFK",
            date1: "2022-09-01",
            date2: "2022-12-30"
        };
        console.log("dispatch: historical weather");
        dispatch(FETCH_WEATHER_F_THUNK(weatherObject));
    }, [dispatch]);
   
    return (
      <div>
         <DisplayWeather/>
      </div>
    );
}

export default Weather;