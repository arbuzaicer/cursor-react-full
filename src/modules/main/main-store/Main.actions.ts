import { AnyAction } from "redux";

export const GET_5_DAYS_FORECAST_TYPE = "GET_5_DAYS_FORECAST_TYPE";
export const GET_WEATHER_BY_CITY_TYPE = "GET_WEATHER_BY_CITY_TYPE";

export const get5DaysForecastAction = ({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}): AnyAction => {
  return {
    type: GET_5_DAYS_FORECAST_TYPE,
    payload: {
      request: {
        method: "GET",
        url: `/city/fivedaysforcast/${lat}/${lon}`,
      },
    },
  };
};

export const getWeatherByCityAction = (city: string): AnyAction => {
  return {
    type: GET_WEATHER_BY_CITY_TYPE,
    payload: {
      request: {
        method: "GET",
        url: `/city/${city}`,
      },
    },
  };
};
