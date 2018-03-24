import * as types from './ActionTypes';

export const fetchTokenRequest = () => ({
  type: types.FETCH_TOKEN_REQUEST
});

export const fetchTokenSuccess = (token) => ({
  type: types.FETCH_TOKEN_SUCCESS,
  token
});

export const fetchTokenError = () => ({
  type: types.FETCH_TOKEN_ERROR
});

export const loginRequest = (username, password, requestToken) => ({
  type: types.LOGIN_REQUEST,
  username,
  password,
  requestToken
});

export const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS
});

export const handleLoginError = (error) => ({
  type: types.HANDLE_LOGIN_ERROR,
  error
});

export const logout = () => ({
  type: types.LOGOUT
});