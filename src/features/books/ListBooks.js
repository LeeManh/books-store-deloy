import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Skeleton, Row, Col } from "antd";

import {
  selectStatusBooks,
  selectErrorBooks,
  selectBooksFilter,
} from "./booksSlice";
import BookCard from "./BookCard";
import { Section } from "../../globalStyles";

const ListBooks = () => {
  const { listBooks, status, error } = useSelector(
    createStructuredSelector({
      listBooks: selectBooksFilter,
      status: selectStatusBooks,
      error: selectErrorBooks,
    })
  );

  // console.log({ listBooks });

  let content;
  if (status === "loading") {
    content = <Skeleton />;
  } else if (status === "succeeded") {
    content = listBooks.map((book) => (
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
