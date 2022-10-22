import React from "react";

import classes from "./TextField.module.scss";

const TextField = ({ className, ...props }) => {
  return <input className={`${classes.input} ${className}`} {...props} />;
};

export default TextField;
