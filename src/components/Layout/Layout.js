import React from "react";
import { Outlet } from "react-router-dom";

import { Container } from "../../globalStyles";
import BreadcrumbComponent from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <main>
      <Header />
      <Container>
        <BreadcrumbComponent />
        <Outlet />
      </Container>
      <Footer />
    </main>
  );
};

export default Layout;
