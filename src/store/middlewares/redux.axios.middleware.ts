import axios, { AxiosRequestConfig } from "axios";
import { Store } from "redux";
import axiosMiddlewareFactory from "redux-axios-middleware";

import { RootReducerType } from "store/RootReducer";

const axiosClient = axios.create({
  baseURL: "https://open-weather13.p.rapidapi.com",
  responseType: "json",
});

const axiosMiddlewareOptions = {
  interceptors: {
    request: [
      (
        { getState, dispatch }: Store<RootReducerType>,
        request: AxiosRequestConfig
      ) => {
        const state = getState();

        if (state.auth.isAuth && state.auth.token) {
          request.headers = {
            ...request.headers,
            ...state.auth.token,
          };
        }

        return request;
      },
    ],
    response: [
      {
        success: (store: Store<RootReducerType>, response: Response) => {
          return Promise.resolve(response);
        },
      },
    ],
  },
};

const axiosMiddleware = axiosMiddlewareFactory(
  axiosClient,
  axiosMiddlewareOptions
);

export default axiosMiddleware;
