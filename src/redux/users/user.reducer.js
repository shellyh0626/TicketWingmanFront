const GET_USER = "GET_USER";
const EDIT_USER = "EDIT_USER";
const REMOVE_USER = "REMOVE_USER";

const defaultUser = {};

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
    default:
      return state;
  }
};

export default userReducer;
