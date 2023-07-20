import axios from "axios";

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
    console.log("Hello, it's me");
    console.log(email);
    let res = await axios.post("http://localhost:8080/auth/me",{email});
    console.log(res.data);
    dispatch(getUser(res.data || {}));
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
