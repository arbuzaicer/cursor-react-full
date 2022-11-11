import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { localStorageKey } from "common/utils/constants";

import { setAuthAction, setTokenAction } from "../auth/auth-store/Auth.actions";
import Routes from "./Routes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem(localStorageKey);

    if (dataFromLocalStorage) {
      const { token, isAuth } = JSON.parse(dataFromLocalStorage);

      if (isAuth) {
        dispatch(setAuthAction(isAuth));
      }

      if (token) {
        dispatch(setTokenAction(token));
      }
    }
  }, []);

  return <Routes />;
}

export default App;
