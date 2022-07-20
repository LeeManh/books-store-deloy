import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";

import BookCard from "./BookCard";

const SwiperStyled = styled(Swiper)`
  padding: 20px 0;

  .swiper-button-prev,
  .swiper-button-next {
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    &::after {
      color: black;
      font-size: 14px;
      font-weight: bold;
    }
  }
`;

const SimilarBooks = ({ books }) => {
  const renderBooks = books.map((book) => (
    <SwiperSlide key={book.id}>
      <BookCard book={book} />
    </SwiperSlide>
  ));

  return (
    <SwiperStyled
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        576: {
          // width: 768,
          slidesPerView: 2,
        },
        768: {
          // width: 768,
          slidesPerView: 3,
        },
        968: {
          // width: 768,
          slidesPerView: 4,
        },
      }}
    >
      {renderBooks}
    </SwiperStyled>
  );
};

export default SimilarBooks;
