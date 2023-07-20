import weatherActionTypes from "./weather.types";
export const INITIAL_WEATHER_STATE = {
    //stores the data of daily average temperature in Fahrenheit degrees
    weatherTemp: [],
    //stores the data of daily average temperature in Celsius degrees
    // tempInCelsius: []
};

const weatherReducer = (state = INITIAL_WEATHER_STATE, {type,payload}) => {
    console.log("weatherReducer is now handling the action "+state);
    switch (type) {
        case weatherActionTypes.weatherTempF:
            return {...state,weatherTemp: payload};
        case weatherActionTypes.weatherTempC:
            return {...state,weatherTemp: payload};
        default:
            return state;
    }
}

export default weatherReducer;