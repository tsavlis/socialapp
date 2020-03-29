import * as actionTypes from "./actionTypes";
// import axios from "axios";

// // let user = JSON.parse(users)
export const authLoginStart = () => {
  return {
    type: actionTypes.AUTH_LOGIN_START
  };
};

export const authLoginSuccess = auth => {
  return {
    type: actionTypes.AUTH_LOGIN_SUCCESS,
    auth
  };
};

export const authLoginFail = error => {
  return {
    type: actionTypes.AUTH_LOGIN_FAIL,
    error
  };
};
export const getInfoForUser = userinfo => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.GET_USER_INFO,
      payload: userinfo
    });
  };
};
export const handleAuthUser = user => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.AUTH_HANDLE_USER,
      payload: user
    });
  };
};
