import React, { useContext } from "react";

import Button from "../../common/components/button/Button";
import { AuthContext } from "../../common/context/Auth.context";
import PageLayout from "../../common/layout/page-layout/PageLayout";
import { setStorageData } from "../../common/utils/functions";

const Main = () => {
  const { signOutHandle } = useContext(AuthContext);

  const signOut = () => {
    setStorageData({
      firstName: undefined,
      secondName: undefined,
      isAuth: false,
    }).then(() => {
      signOutHandle();
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
