import { AnyAction } from "redux";

import { RootReducerType } from "store/RootReducer";

import {
  GET_5_DAYS_FORECAST_TYPE,
  GET_WEATHER_BY_CITY_TYPE,
} from "./Main.actions";

const initialState = {
  fiveDaysForecast: null,
  weatherByCity: null,
};

const MainReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case `${GET_5_DAYS_FORECAST_TYPE}_SUCCESS`: {
      return {
        ...state,
        fiveDaysForecast: action.payload.data,
      };
    }

    case `${GET_WEATHER_BY_CITY_TYPE}_SUCCESS`: {
      return {
        ...state,
        weatherByCity: action.payload.data,
      };
    }

    default: {
      return state;
    }
  }
};

export const get5DaysWeatherSelector = (store: RootReducerType): any =>
  store.main.fiveDaysForecast;

export const getWeatherByCityNameSelector = (store: RootReducerType): any =>
  store.main.weatherByCity;

export default MainReducer;
