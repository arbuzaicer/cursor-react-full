import React from "react";
import { Routes as RRoutes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { getAuthSelector } from "modules/auth/auth-store/Auth.reducer";
import SignIn from "modules/auth/pages/sign-in/SignIn";
import SignUp from "modules/auth/pages/sign-up/SignUp";
import Main from "modules/main/Main";

import NotFoundPage from "./pages/NotFoundPage";

export const AppRoutes = {
  signIn: "/sign-in",
  signUp: "/sign-up",
  main: "/main",
  initial: "/",
};

const Routes = () => {
  const isAuth = useSelector(getAuthSelector);

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
