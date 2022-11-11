import { AnyAction } from "redux";

import { RootReducerType } from "store/RootReducer";

import { SET_AUTH_TYPE, SET_TOKEN_TYPE } from "./Auth.actions";

const initialState = {
  isAuth: false,
  token: null,
};

const AuthReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_AUTH_TYPE: {
      return {
        ...state,
        isAuth: action.payload,
      };
    }

    case SET_TOKEN_TYPE: {
      return {
        ...state,
        token: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export const getAuthSelector = (store: RootReducerType): boolean =>
  store.auth.isAuth;

export default AuthReducer;
