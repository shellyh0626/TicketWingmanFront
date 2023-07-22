import {
  UPDATE_SEARCH_DATA,
  SEARCH_FLIGHTS_SUCCESS,
  SEARCH_FLIGHTS_FAILURE,
} from "./search.types";

const initialState = {
  fromValue: "",
  toValue: "",
  departValue: "",
  returnValue: "",
  flights: [], // Store search results
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_DATA:
      return {
        ...state,
        fromValue: action.payload.fromValue,
        toValue: action.payload.toValue,
        departValue: action.payload.departValue,
        returnValue: action.payload.returnValue,
      };
    case SEARCH_FLIGHTS_SUCCESS:
      return {
        ...state,
        flights: action.payload,
        error: null,
      };
    case SEARCH_FLIGHTS_FAILURE:
      return {
        ...state,
        flights: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
