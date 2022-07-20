import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Skeleton, Row, Col } from "antd";
import { useLocation } from "react-router-dom";

import {
  selectStatusBooks,
  selectErrorBooks,
  selectBooksFilter,
} from "./booksSlice";
import BookCard from "./BookCard";
import { Section } from "../../globalStyles";

const ListBooks = () => {
  const { search } = useLocation();

  const page = new URLSearchParams(search).get("page") || 1;
  const [limit, setLimit] = useState(5);

  const { listBooks, status, error } = useSelector(
    createStructuredSelector({
      listBooks: selectBooksFilter,
      status: selectStatusBooks,
      error: selectErrorBooks,
    })
  );
  // console.log({ listBooks });

  const listBooksRender = useMemo(
    () => listBooks.slice((page - 1) * limit, page * limit),
    [listBooks, page, limit]
  );
  // console.log({ listBooksRender });

  let content;
  if (status === "loading") {
    content = <Skeleton />;
  } else if (status === "succeeded") {
    content = listBooksRender.map((book) => (
      <Col key={book.id} xs={24} sm={24} md={12} lg={8} xl={6}>
        <BookCard book={book} />
      </Col>
    ));
  } else if (status === "failed") {
    content = <div>{error.message}</div>;
  }

  return (
    <Section>
      <Row gutter={[20, 20]}>{content}</Row>
    </Section>
  );
};

export default ListBooks;
