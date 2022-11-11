import { localStorageKey } from "./constants";

export const setStorageData = ({
  token,
  isAuth,
}: {
  token?: any;
  isAuth: boolean;
}): Promise<any> => {
  return new Promise<Promise<any>>((res: any) => {
    localStorage.setItem(
      localStorageKey,
      JSON.stringify({
        token,
        isAuth,
      })
    );

    res();
  });
};
