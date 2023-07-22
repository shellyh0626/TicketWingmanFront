import axios from "axios";
import {
  UPDATE_SEARCH_DATA,
  SEARCH_FLIGHTS_SUCCESS,
  SEARCH_FLIGHTS_FAILURE,
} from "./search.types";

export const updateSearchData = (
  fromValue,
  toValue,
  departValue,
  returnValue
) => ({
  type: UPDATE_SEARCH_DATA,
  payload: { fromValue, toValue, departValue, returnValue },
});

export const searchFlights = (requestData) => async (dispatch) => {
  const apiUrl = "http://localhost:8080/api/flights/search";
  const searchParams = new URLSearchParams(requestData);
  const urlWithParams = `${apiUrl}?${searchParams}`;

  try {
    console.log("Request address:" + urlWithParams);
    // async await request with axios. Then wait for the result
    const response = await axios.get(urlWithParams);
    console.log(response.data);

    // Requested successful, then update redux data
    dispatch({ type: SEARCH_FLIGHTS_SUCCESS, payload: response.data });
  } catch (error) {
    // Error handling when request fail
    dispatch({ type: SEARCH_FLIGHTS_FAILURE, payload: error.message });
  }
};
