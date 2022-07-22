import React from "react";
import styled from "styled-components";
import { Tag } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { numberWithCommas } from "../../unity";
import { selectFilter } from "./filterSlice";
import { categoryChange, rateChange, pricesChange } from "./filterSlice";

const Container = styled.div`
  padding: 0 20px;
`;

const CustomTag = styled(Tag)`
  border-radius: 12px;
  padding: 2px 10px;
`;

const InputFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const handleClosePrices = () => {
    dispatch(pricesChange(""));
  };
  const handleCloseCategory = () => {
    dispatch(categoryChange(""));
  };
  const handleCloseRate = () => {
    dispatch(rateChange(""));
  };

  const render = Object.entries(filter).map(([key, value]) => {
    if (!value) return;

    if (key === "prices") {
      return (
        <CustomTag closable key={key} onClose={handleClosePrices}>
          {numberWithCommas(value.min)}đ đến {numberWithCommas(value.max)}đ
        </CustomTag>
      );
    } else if (key === "category") {
      return (
        <CustomTag closable key={key} onClose={handleCloseCategory}>
          {value}
        </CustomTag>
      );
    } else if (key === "rate") {
      return (
        <CustomTag closable key={key} onClose={handleCloseRate}>
          {value} sao
        </CustomTag>
      );
    }
  });

  return <Container>{render}</Container>;
};

export default InputFilter;
