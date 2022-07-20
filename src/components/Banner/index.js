// import Swiper core and required modules
import styled from "styled-components";

import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SlideContainer = styled.div`
  border-radius: 10px;
`;
const SwiperStyled = styled(Swiper)`
  height: 330px;

  @media screen and (max-width: 992px) {
    height: 280px;
  }
  @media screen and (max-width: 768px) {
    height: 250px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 1);

    @media screen and (max-width: 992px) {
      width: 40px;
      height: 40px;
    }

    &::after {
      font-size: 24px;
      font-weight: bolder;

      @media screen and (max-width: 992px) {
      }
    }
  }

  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    margin: 0 10px !important;

    @media screen and (max-width: 992px) {
      width: 12px;
      height: 12px;
      margin: 0 5px !important;
    }
  }
`;
const SlideImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const dataSlide = [
  "https://salt.tikicdn.com/cache/w1080/ts/banner/56/9b/df/4696ff9c5d77ffe13ffccc5173533965.png",
  "https://salt.tikicdn.com/cache/w1080/ts/banner/80/63/9a/8111158d6b957b60c77209a16c71decf.jpg",
  "https://salt.tikicdn.com/cache/w1080/ts/banner/ca/d4/f8/2d772e7bbcb87a5a2e1ac84acb834292.jpg",
  "https://salt.tikicdn.com/cache/w1080/ts/banner/56/9b/df/4696ff9c5d77ffe13ffccc5173533965.png",
];

export default function Slied() {
  const renderSlide = dataSlide.map((img, index) => (
    <SwiperSlide key={`slide-${index}`}>
      <SlideImg src={img} alt="img" />
    </SwiperSlide>
  ));

  return (
    <SlideContainer>
      <SwiperStyled
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {renderSlide}
      </SwiperStyled>
    </SlideContainer>
  );
}
