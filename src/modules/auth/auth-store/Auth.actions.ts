import { AnyAction } from "redux";

export const SET_AUTH_TYPE = "SET_AUTH_ACTION";
export const SET_TOKEN_TYPE = "SET_TOKEN_TYPE";

export const setAuthAction = (isAuth: boolean): AnyAction => {
  return {
    type: SET_AUTH_TYPE,
    payload: isAuth,
  };
};

export const setTokenAction = (token: any): AnyAction => {
  return {
    type: SET_TOKEN_TYPE,
    payload: token,
  };
};
