import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "common/components/button/Button";
import PageLayout from "common/layout/page-layout/PageLayout";
import { setStorageData } from "common/utils/functions";

import { setAuthAction, setTokenAction } from "../auth/auth-store/Auth.actions";
import {
  get5DaysForecastAction,
  getWeatherByCityAction,
} from "./main-store/Main.actions";
import { getWeatherByCityNameSelector } from "./main-store/Main.reducer";

const Main = () => {
  const dispatch = useDispatch();
  const cityWeather = useSelector(getWeatherByCityNameSelector);

  const [cityName, setSCityName] = useState<string>("");

  const signOut = () => {
    setStorageData({
      token: null,
      isAuth: false,
    }).then(() => {
      dispatch(setAuthAction(false));
      dispatch(setTokenAction(null));
    });
  };

  const get5Days = () => {
    dispatch(
      get5DaysForecastAction({
        lat: 30.438,
        lon: -89.1028,
      })
    );
  };

  const getWeatherByCity = () => {
    dispatch(getWeatherByCityAction(cityName));
  };

  return (
    <PageLayout className="content-center">
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 500 }}>
        <h1 className="main-typography">You are on main page</h1>
        <input
          type="text"
          value={cityName}
          onChange={(e) => {
            setSCityName(e.target.value);
          }}
        />

        <Button onClick={get5Days}>Get 5 days forecast</Button>
        <Button onClick={getWeatherByCity}>Get weather by city</Button>
        <Button onClick={signOut}>Sign out</Button>

        {cityWeather && <pre>{JSON.stringify(cityWeather)}</pre>}
      </div>
    </PageLayout>
  );
};

export default Main;
