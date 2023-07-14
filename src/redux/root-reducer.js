import { combineReducers } from "redux";
import User from "./users/user.reducer";
import weatherReducer from "./weather/weather.reducer";

const rootReducer = combineReducers({
  user: User,
  weather: weatherReducer
});

export default rootReducer;
