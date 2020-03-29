import * as actionTypes from "../actions/actionTypes";

const initialState = {
  auth: "",
  userInfo: "",
  loading: true,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        auth: action.auth,
        loading: false,
        error: false
      };
    case actionTypes.AUTH_LOGIN_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case actionTypes.AUTH_HANDLE_USER:
      return {
        ...state,
        auth: action.payload
      };
    case actionTypes.GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
