import React, { useContext } from "react";
import { Routes as RRoutes, Route } from "react-router-dom";

import { AuthContext } from "../../common/context/Auth.context";

import SignIn from "../auth/pages/sign-in/SignIn";
import SignUp from "../auth/pages/sign-up/SignUp";
import Main from "../main/Main";
import NotFoundPage from "./pages/NotFoundPage";

export const AppRoutes = {
  signIn: "/sign-in",
  signUp: "/sign-up",
  main: "/main",
  initial: "/",
};

const Routes = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <RRoutes>
      {isAuth ? (
        <>
          <Route path="*" element={<NotFoundPage />} />
          <Route index element={<Main />} />
          <Route path={AppRoutes.main} element={<Main />} />
        </>
      ) : (
        <>
          <Route path="*" element={<NotFoundPage />} />
          <Route index element={<SignIn />} />
          <Route path={AppRoutes.signIn} element={<SignIn />} />
          <Route path={AppRoutes.signUp} element={<SignUp />} />
        </>
      )}
    </RRoutes>
  );
};

export default Routes;
