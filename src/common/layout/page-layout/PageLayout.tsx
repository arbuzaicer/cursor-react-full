import React, { ReactNode } from "react";

import classes from "./PageLayout.module.scss";

type CustomProps = {
  children: ReactNode;
  className: string;
};

type PageLayoutProps = CustomProps & JSX.IntrinsicElements["div"];

const PageLayout = ({ children, className, ...props }: PageLayoutProps) => {
  return (
    <div className={`${classes.container} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default PageLayout;
