import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AppRoutes } from "../../../app/Routes";
import { AuthContext } from "../../../../common/context/Auth.context";
import { setStorageData } from "../../../../common/utils/functions";
import PageLayout from "../../../../common/layout/page-layout/PageLayout";
import TextField from "../../../../common/components/text-field/TextField";
import Button from "../../../../common/components/button/Button";

import classes from "../sign-in/SingIn.module.scss";

const SignUp = () => {
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
          <h1 className={`center ${classes.title}`}>Sign Up</h1>

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
        <p className="center">
          If you already have an account you can{" "}
          <Link to={AppRoutes.signIn}>Sign In</Link>
        </p>
      </div>
    </PageLayout>
  );
};

export default SignUp;
