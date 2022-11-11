import React from "react";
import { useDispatch } from "react-redux";

import Button from "common/components/button/Button";
import PageLayout from "common/layout/page-layout/PageLayout";
import { setStorageData } from "common/utils/functions";

import { setAuthAction } from "../auth/auth-store/Auth.actions";

const Main = () => {
  const dispatch = useDispatch();

  const signOut = () => {
    setStorageData({
      isAuth: false,
    }).then(() => {
      dispatch(setAuthAction(false));
    });
  };

  return (
    <PageLayout className="content-center">
      <div>
        <h1 className="main-typography">You are on main page</h1>
        <Button onClick={signOut}>Sign out</Button>
      </div>
    </PageLayout>
  );
};

export default Main;
