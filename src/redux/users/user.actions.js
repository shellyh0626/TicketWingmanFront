import axios from "axios";

const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";

const getUser = (user) => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });

export const me = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8080/auth/me");
    dispatch(getUser(res.data || {}));
  } catch (err) {
    console.error(err);
  }
};

export const auth = (email, password, method) => async (dispatch) => {
  let res;
  try {
    res = await axios.post(`http://localhost:8080/auth/${method}`, {
      email,
      password,
    });
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  try {
    dispatch(getUser(res.data));
    // histroy.push("/home");
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
