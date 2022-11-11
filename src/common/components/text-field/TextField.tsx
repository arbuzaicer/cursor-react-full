import React from "react";

import classes from "./TextField.module.scss";

type CustomProps = {
  className?: string;
};

type TextFieldProps = CustomProps & JSX.IntrinsicElements["input"];

const TextField = ({ className, ...props }: TextFieldProps) => {
  return <input className={`${classes.input} ${className}`} {...props} />;
};

export default TextField;
