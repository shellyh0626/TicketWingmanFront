import { combineReducers } from "redux";
import User from "./users/user.reducer";
import weatherReducer from "./weather/weather.reducer";
import searchReducer from "./flights/search.reducer";

const rootReducer = combineReducers({
  user: User,
  weather: weatherReducer,
  search: searchReducer,
});

export default rootReducer;
