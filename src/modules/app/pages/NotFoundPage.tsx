import React, { useEffect } from "react";
import { useNavigate } from "react-router";

import PageLayout from "common/layout/page-layout/PageLayout";

import { AppRoutes } from "../Routes";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate(AppRoutes.initial, { replace: true });
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [navigate]);

  return (
    <PageLayout className="content-center">
      <h1 className="main-typography">Page not found</h1>
    </PageLayout>
  );
};

export default NotFoundPage;
