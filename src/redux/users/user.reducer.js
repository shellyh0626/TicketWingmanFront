const GET_USER = "GET_USER";
const EDIT_USER = "EDIT_USER";
const REMOVE_USER = "REMOVE_USER";
const LOGIN_ERROR = "LOGIN_ERROR";
const RESET_LOGIN_ERROR = "RESET_LOGIN_ERROR";

const defaultUser = {
  error: null,
};

const userReducer = (state = defaultUser, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        ...action.user,
      };
    case REMOVE_USER:
      return defaultUser;
    case EDIT_USER:
      if (state.email === action.payload.id) {
        return { ...state, ...action.payload.updates };
      }
      return state;
    case LOGIN_ERROR: // Handle login errors
      return {
        ...state,
        error: action.payload,
      };
    case RESET_LOGIN_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
