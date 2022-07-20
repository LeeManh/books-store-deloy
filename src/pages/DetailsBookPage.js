import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Section } from "../globalStyles";
import { selectBookById, getSimilarBooks } from "../features/books/booksSlice";
import { Title } from "../components/common/Tittle.styled";
import SimilarBooksSlide from "../features/books/SimilarBooksSlide";
import DetailsBook from "../features/books/DetailsBook";
import InforTableBook from "../features/books/InforTableBook";
import ReviewBook from "../features/books/ReviewBook";

const SingleBook = () => {
  const { idBook } = useParams();

  //get book by Id
  const book = useSelector((state) => selectBookById(state, Number(idBook)));

  //get similar book
  const listBookByCategory = useSelector((state) =>
    getSimilarBooks(state, { category: book?.category, id: book?.id })
  );

  if (!book) {
    return <p>Not found book</p>;
  }

  return (
    <>
      {/* details book*/}
      <Section>
        <DetailsBook book={book} />
      </Section>

      {/* simalar books*/}
      <Section>
        <Title>Sản Phẩm Tương Tự</Title>

        {listBookByCategory?.length === 0 ? (
          <p>Không có sản phẩm tương tự</p>
        ) : (
          <SimilarBooksSlide books={listBookByCategory} />
        )}
      </Section>

      {/* infor table book*/}
      <Section>
        <Title>Thông Tin Chi Tiết</Title>
        <InforTableBook book={book} />
      </Section>

      {/* Review Book */}
      <Section>
        <Title>Đánh Giá - Nhận Xét Từ Khách Hàng</Title>
        <ReviewBook />
      </Section>

      <Section>
        <Title>Sản Phẩm Bạn Đã Xem</Title>
      </Section>
    </>
  );
};

export default SingleBook;
