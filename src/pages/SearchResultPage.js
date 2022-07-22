import React, { useMemo } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { Section } from "../globalStyles";
import BookCard from "../features/books/BookCard";
import { selectBookSearch } from "../features/books/booksSlice";
import { DividerStyled } from "../components/common/Devider.styled";

const Title = styled.h1`
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 24px;
`;
const Content = styled.div`
  padding: 20px 0;
`;

const SearchResultPage = () => {
  const { search } = useLocation();
  // console.log({ search });

  const text = useMemo(
    () => new URLSearchParams(search).get("title") || "",
    [search]
  );
  // console.log({ text });

  const books = useSelector((state) => selectBookSearch(state, text));
  // console.log({ books });

  let content;

  if (books.length === 0) {
    return (
      <Section>
        <p>Không tìm thấy kết quả phù hợp</p>
      </Section>
    );
  }

  const renderBooks = books.map((book) => (
    <Col xs={24} sm={12} md={8} lg={6} key={book.id}>
      <BookCard book={book} />
    </Col>
  ));

  return (
    <Section>
      <Title>Kết quả tìm kiếm cho : ` {text} `</Title>
      <DividerStyled />
      <Content>
        <Row gutter={[20, 20]}>{renderBooks}</Row>
      </Content>
    </Section>
  );
};

export default SearchResultPage;
