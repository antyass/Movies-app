import * as types from "./ActionTypes";

const initialState = {
  requestToken: null,
  isAuth: false,
  error: ""
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        requestToken: action.token
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true
      };
    case types.LOGOUT:
      return {
        ...state,
        isAuth: false
      };
    case types.FETCH_TOKEN_ERROR:
    case types.HANDLE_LOGIN_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default auth;