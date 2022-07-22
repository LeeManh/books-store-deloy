import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { DividerStyled } from "../../components/common/Devider.styled";
import { sortChange, selectFilterSort } from "./filterSlice";

const Container = styled.div`
  padding: 20px;
`;
const SortList = styled.div`
  display: flex;
`;
const SortItem = styled.div`
  font-size: 14px;
  color: #242424;
  font-weight: 400;
  line-height: 20px;
  padding: 5px 10px 15px;
  margin-right: 20px;
  cursor: pointer;
  position: relative;
  transition: 0.2s ease;

  &:hover {
    font-weight: 700;
    color: #0d5cb6;

    &::after {
      width: 100%;
    }
  }

  &.active {
    font-weight: 700;
    color: #0d5cb6;

    &::after {
      width: 100%;
    }
  }

  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 5px;
    bottom: 0;
    left: 0;
    background-color: #0d5cb6;
    border-radius: 5px;
    transition: 0.2s ease;
  }
`;

const Sort = () => {
  const naviagate = useNavigate();
  const dispatch = useDispatch();

  const sort = useSelector(selectFilterSort);

  const handleClick = (e) => {
    dispatch(sortChange(e.target.getAttribute("data-value")));
    naviagate("?page=1");
  };

  return (
    <Container>
      <SortList>
        <SortItem
          onClick={handleClick}
          data-value={"low"}
          className={sort === "low" ? "active" : ""}
        >
          Giá Thấp
        </SortItem>
        <SortItem
          onClick={handleClick}
          data-value={"high"}
          className={sort === "high" ? "active" : ""}
        >
          Giá Cao
        </SortItem>
      </SortList>
      <DividerStyled margin="0 0 10px" />
    </Container>
  );
};

export default Sort;
