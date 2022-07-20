import React from "react";
import styled from "styled-components";

import { CgSmileSad } from "react-icons/cg";

const ReviewContainer = styled.div`
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const EmptyReview = styled.div`
  text-align: center;
  color: rgb(128, 128, 137);

  .icon {
    font-size: 50px;
  }
`;
const EmptyReviewText = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
`;

const ReviewBook = () => {
  return (
    <ReviewContainer>
      <EmptyReview>
        <CgSmileSad className="icon" />
        <EmptyReviewText>Chưa có đánh giá nào cho sản phẩm này</EmptyReviewText>
      </EmptyReview>
    </ReviewContainer>
  );
};

export default ReviewBook;
