import { useEffect, useState } from "react";

import { AuthContext } from "../../common/context/Auth.context";
import { localStorageKey } from "../../common/utils/constants";

import Routes from "./Routes";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState();

  const signInHandle = () => {
    setIsAuth(true);
  };

  const signOutHandle = () => {
    setIsAuth(false);
  };

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem(localStorageKey);

    if (dataFromLocalStorage) {
      const { firstName, secondName, isAuth } = JSON.parse(
        dataFromLocalStorage
      );

      setUser({ firstName, secondName });
      setIsAuth(isAuth);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        signInHandle,
        signOutHandle,
        user,
        setUser,
      }}
    >
      <Routes />
    </AuthContext.Provider>
  );
}

export default App;
