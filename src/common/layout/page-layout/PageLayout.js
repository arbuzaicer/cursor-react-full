import React from "react";

import classes from "./PageLayout.module.scss";

const PageLayout = ({ children, className, ...props }) => {
  return (
    <div className={`${classes.container} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default PageLayout;
