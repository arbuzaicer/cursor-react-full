import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AppRoutes } from "../../../app/Routes";
import Button from "../../../../common/components/button/Button";
import TextField from "../../../../common/components/text-field/TextField";
import { AuthContext } from "../../../../common/context/Auth.context";
import PageLayout from "../../../../common/layout/page-layout/PageLayout";
import { setStorageData } from "../../../../common/utils/functions";

import classes from "./SingIn.module.scss";

const SignIn = () => {
  const { signInHandle, setUser } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const onSubmit = () => {
    if (!firstName.trim() || !secondName.trim()) {
      alert("Please submit all data");
      return;
    }

    setStorageData({
      firstName,
      secondName,
      isAuth: true,
    }).then(() => {
      setUser({
        firstName,
        secondName,
      });
      signInHandle();
    });
  };

  return (
    <PageLayout className="content-center">
      <div>
        <div className={classes.container}>
          <h1 className={`center ${classes.title}`}>Sign in</h1>

          <TextField
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <TextField
            value={secondName}
            onChange={(e) => {
              setSecondName(e.target.value);
            }}
          />
          <Button onClick={onSubmit}>Sing in</Button>
        </div>
        <p className={classes["bottom-title"]}>
          If you don't have an account you can{" "}
          <Link to={AppRoutes.signUp}>Sign Up</Link>
        </p>
      </div>
    </PageLayout>
  );
};

export default SignIn;
