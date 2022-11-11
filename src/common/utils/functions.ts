import { localStorageKey } from "./constants";

export const setStorageData = ({
  firstName,
  secondName,
  isAuth,
}: {
  firstName?: string;
  secondName?: string;
  isAuth: boolean;
}): Promise<any> => {
  return new Promise<Promise<any>>((res: any) => {
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
