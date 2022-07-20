import { Rate } from "antd";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../../unity";
import { Tag } from "antd";

const BookCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px 20px 20px;
  border-radius: 5px;
  border: 1px solid #666666;
  transition: all 0.5s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
  }
`;
const Cover = styled.div`
  height: 200px;
  margin-bottom: 10px;
  cursor: pointer;
`;
const CoverImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Body = styled.div`
  width: 100%;
`;
const Title = styled.h3`
  --lh: 1.4;
  --fsize: 13px;
  --number-line: 2;
  font-weight: 400;
  text-align: center;
  font-size: var(--fsize);
  line-height: var(--lh);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: var(--number-line); /* number of lines to show */
  line-clamp: var(--number-line);
  -webkit-box-orient: vertical;
  height: calc(var(--lh) * var(--fsize) * Var(--number-line));
  cursor: pointer;

  .link {
    color: #242424;
  }
`;
const TagCustom = styled(Tag)`
  margin-bottom: 5px;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`;
const BookCardRate = styled(Rate)`
  font-size: 12px;
  margin-right: 10px;
  position: relative;

  .ant-rate-star:not(:last-child) {
    margin-right: 4px;
  }
`;
const NumberSale = styled.div`
  font-size: 12px;
  color: rgb(120, 120, 120);
  position: relative;
  padding-left: 10px;

  &::before {
    position: absolute;
    content: "";
    width: 1px;
    height: 90%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: rgb(120, 120, 120);
  }
`;
const Price = styled.div`
  font-size: 16px;
  color: rgb(255, 66, 78);
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
`;

const BookCard = ({ book }) => {
  return (
    <BookCardContainer>
      <Cover>
        <Link to={`/books/${book.id}`}>
          <CoverImg src={book.images[0]} alt={book.images[0]} />
        </Link>
      </Cover>
      <Body>
        <Title>
          <Link to={`/books/${book.id}`} className="link">
            {book.title}
          </Link>
        </Title>
        <TagCustom>{book.category}</TagCustom>
        <Box>
          <BookCardRate disabled defaultValue={book.rate} />
          <NumberSale>Đã bán 1000+</NumberSale>
        </Box>
        <Price>{numberWithCommas(book.price)} ₫</Price>
      </Body>
    </BookCardContainer>
  );
};

export default BookCard;
