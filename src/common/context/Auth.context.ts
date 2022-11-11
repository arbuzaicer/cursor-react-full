import { createContext } from "react";

type AuthProps = {
  isAuth: boolean;
  user: any;
  setUser: (value?: any) => void;
  signInHandle: (value?: boolean) => void;
  signOutHandle: (value?: boolean) => void;
};

export const AuthContext = createContext<AuthProps>(
  (null as unknown) as AuthProps
);
