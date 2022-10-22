import { localStorageKey } from "./constants";

export const setStorageData = ({ firstName, secondName, isAuth }) => {
  return new Promise((res) => {
    localStorage.setItem(
      localStorageKey,
      JSON.stringify({
        firstName,
        secondName,
        isAuth,
      })
    );

    res();
  });
};
