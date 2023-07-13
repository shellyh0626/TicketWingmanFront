const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";

const defaultUser = {};

const userReducer = (state = defaultUser, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    default:
      return state;
  }
};

export default userReducer;
