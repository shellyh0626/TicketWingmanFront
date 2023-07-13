import { combineReducers } from "redux";
import User from "./users/user.reducer";

const rootReducer = combineReducers({
  user: User,
});

export default rootReducer;
