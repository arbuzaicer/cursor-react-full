import React, { ReactNode } from "react";

import classes from "./Button.module.scss";

type CustomProps = {
  children: ReactNode;
  className?: string;
};

type ButtonProps = CustomProps & JSX.IntrinsicElements["button"];

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={`${classes.button} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
