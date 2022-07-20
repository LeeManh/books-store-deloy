import React from "react";
import { Outlet } from "react-router-dom";

import { Container } from "../../globalStyles";
import BreadcrumbComponent from "./Breadcrumb";
import Header from "./Header";

const Layout = () => {
  return (
    <main>
      <Header />
      <Container>
        <BreadcrumbComponent />
        <Outlet />
      </Container>
    </main>
  );
};

export default Layout;
