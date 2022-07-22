import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Rate, message } from "antd";
import { useNavigate } from "react-router-dom";

import { selectBooks } from "../books/booksSlice";
import { DividerStyled } from "../../components/common/Devider.styled";
import InputNumberStyled from "../../components/InputNumberStyled";
import { categoryChange, rateChange, pricesChange } from "./filterSlice";

const Container = styled.div``;
const FilterItem = styled.div`
  color: #242424;
  font-size: 13px;
  margin-bottom: 15px;
`;
const Heading = styled.h3`
  font-weight: 500;
  margin-bottom: 8px;
  text-transform: uppercase;
`;
const Category = styled.div`
  padding: 8px 0;
  cursor: pointer;
`;

const RateBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
const RateItem = styled.div`
  display: flex;
  column-gap: 10px;
  cursor: pointer;
`;

const RateCustom = styled(Rate)`
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;

  .ant-rate-star {
    margin-right: 4px;
  }
`;

const RateText = styled.p``;

const FilterPrice = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;
const Button = styled.button`
  outline: none;
  border: none;
  padding: 8px 30px;
  border-radius: 5px;
  margin-top: 20px;
  background-color: #1a95ff;
  color: white;
  cursor: pointer;
`;

const FilterBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector(selectBooks);

  const categories = new Set();
  books.map((book) => categories.add(book.category));

  const pricesRef = useRef();

  const handleClickCategory = (e) => {
    dispatch(categoryChange(e.target.innerText));
    navigate(`?page=1`);
  };

  const handleClickRates = (n) => {
    dispatch(rateChange(n));
    navigate(`?page=1`);
  };

  const handleClickPrices = () => {
    const child = pricesRef.current.children;

    const prices = [...child].reduce((obj, element) => {
      if (!element.name) return obj;
      return { ...obj, [element.name]: Number(element.value) };
    }, {});

    if (prices.min > prices.max) {
      message.error("Giá tiền không hợp lệ");
      return;
    }

    dispatch(pricesChange(prices));
    navigate(`?page=1`);
  };

  return (
    <Container>
      <FilterItem>
        <Heading>DANH MỤC SẢN PHẨM</Heading>
        {[...categories].length > 0 &&
          [...categories].map((category, i) => (
            <Category key={i} onClick={handleClickCategory}>
              {category}
            </Category>
          ))}
        <DividerStyled />
      </FilterItem>

      <FilterItem>
        <Heading>ĐÁNH GIÁ</Heading>
        <RateBox>
          {[5, 4, 3, 2].map((n) => (
            <RateItem
              key={n}
              onClick={() => handleClickRates(n)}
              data-value={n}
            >
              <RateCustom disabled defaultValue={n} />
              <RateText>Từ {n} sao</RateText>
            </RateItem>
          ))}
        </RateBox>
        <DividerStyled />
      </FilterItem>

      <FilterItem>
        <Heading>GIÁ</Heading>
        <FilterPrice ref={pricesRef}>
          <InputNumberStyled name="min" />
          <p>Đến</p>
          <InputNumberStyled name="max" />
        </FilterPrice>
        <Button onClick={handleClickPrices}>Áp dụng</Button>
        <DividerStyled />
      </FilterItem>
    </Container>
  );
};

export default FilterBook;
