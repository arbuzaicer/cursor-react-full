import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { localStorageKey } from "common/utils/constants";

import { setAuthAction } from "../auth/auth-store/Auth.actions";
import Routes from "./Routes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem(localStorageKey);

    if (dataFromLocalStorage) {
      const { firstName, secondName, isAuth } = JSON.parse(
        dataFromLocalStorage
      );

      if (isAuth) {
        dispatch(setAuthAction(isAuth));
      }
    }
  }, []);

  return <Routes />;
}

export default App;
