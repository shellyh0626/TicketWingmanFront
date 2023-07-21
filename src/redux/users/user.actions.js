import axios from "axios";
import defaultUser from "./user.reducer";
axios.defaults.withCredentials = true;

const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";
const EDIT_USER = "EDIT_USER";

const getUser = (user) => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });
const editUser = (userEmail, updates) => ({
  type: EDIT_USER,
  payload: {
    id: userEmail,
    updates: updates,
  },
});

export const me = (email) => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8080/auth/me", {
      email,
      withCredentials: true,
    });
    console.log("ME RESPONSE", res.data);
    dispatch(getUser(res.data || defaultUser));
  } catch (err) {
    console.error(err);
  }
};

export const authSignup =
  (firstName, lastName, email, password) => async (dispatch) => {
    let res;
    try {
      res = await axios.post(`http://localhost:8080/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
      });
    } catch (authError) {
      return dispatch(getUser({ error: authError }));
    }

    try {
      dispatch(getUser(res.data));
      // history.push("/home");
    } catch (dispatchOrHistoryErr) {
      console.error(dispatchOrHistoryErr);
    }
  };

export const authLogin = (email, password) => async (dispatch) => {
  let res;
  try {
    res = await axios.post(`http://localhost:8080/auth/login`, {
      email,
      password,
    });
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  try {
    dispatch(getUser(res.data));
    // history.push("/home");
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.post("http://localhost:8080/auth/logout");
    dispatch(removeUser());
  } catch (err) {
    console.error(err);
  }
};

export const editUserThunk = (userEmail, updates) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/user/${userEmail}`,
        updates
      );
      dispatch(editUser(userEmail, { updates: response.data }));
    } catch (error) {
      console.error(error);
    }
  };
};