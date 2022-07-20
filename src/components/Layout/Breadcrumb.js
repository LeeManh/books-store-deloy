import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectBookById } from "../../features/books/booksSlice";

const Container = styled.div`
  margin-bottom: 20px;
`;

const CustomBreadcrumbItem = styled(Breadcrumb.Item)`
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;

  &:hover .link {
    color: #1a95ff;
  }
`;

const BreadcrumbComponent = () => {
  const { pathname } = useLocation();

  const arrPathName = pathname.split("/");

  const book = useSelector((state) => selectBookById(state, arrPathName[2]));

  return (
    <Container>
      <Breadcrumb>
        <CustomBreadcrumbItem>
          <Link to="/">Home</Link>
        </CustomBreadcrumbItem>

        {book && book.title ? (
          <CustomBreadcrumbItem>{book.title}</CustomBreadcrumbItem>
        ) : (
          <CustomBreadcrumbItem>{arrPathName[1]}</CustomBreadcrumbItem>
        )}
      </Breadcrumb>
    </Container>
  );
};

export default BreadcrumbComponent;
