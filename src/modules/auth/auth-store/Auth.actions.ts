import { AnyAction } from "redux";

export const SET_AUTH_TYPE = "SET_AUTH_ACTION";

export const setAuthAction = (isAuth: boolean): AnyAction => {
  return {
    type: SET_AUTH_TYPE,
    payload: isAuth,
  };
};
