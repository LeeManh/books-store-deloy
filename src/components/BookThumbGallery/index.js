import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const SwiperStyled = styled(Swiper)`
  width: 100%;
  height: ${({ height }) => (height ? height : "100%")};
  border-radius: 10px;

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const SwiperMain = styled(SwiperStyled)`
  height: 400px;
  margin-bottom: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .swiper-button-next,
  .swiper-button-prev {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 1);

    &::after {
      font-size: 24px;
      font-weight: bolder;
    }
  }
`;
const SwiperThumb = styled(SwiperStyled)`
  .swiper-slide {
    cursor: pointer;
    width: 50px;
    height: 50pxpx;

    & img {
      border-radius: 10px;
    }

    &.swiper-slide-thumb-active img {
      border: 2px solid #1a95ff;
    }
  }
`;

export default function SwiperThumbGallery({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const render = images.map((img, i) => (
    <SwiperSlide key={i}>
      <img src={img} alt="test" />
    </SwiperSlide>
  ));

  return (
    <div>
      <SwiperMain
        spaceBetween={0}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Navigation, Thumbs]}
      >
        {render}
      </SwiperMain>
      <SwiperThumb
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="mySwiper"
      >
        {render}
      </SwiperThumb>
    </div>
  );
}
