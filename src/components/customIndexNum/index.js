import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid #c8c8c8;
  outline: none;
  width: 32px;
  height: 24px;
  text-align: center;

  /*hide arrow Firefox */
  -moz-appearance: textfield;

  /*hide arrow Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Btn = styled.button`
  width: 24px;
  height: 24px;
  outline: none;
  border: 1px solid #c8c8c8;
  cursor: pointer;
`;

const BtnIncremnet = styled(Btn)``;

const BtnDecrement = styled(Btn)``;

const CustomInputNumber = ({ quantity, onchangeQuantity }) => {
  const [value, setValue] = useState(quantity);
  // console.log({ value });

  const onInputChange = (e) => {
    setValue(Number(e.target.value));
    onchangeQuantity(Number(e.target.value));
  };

  const handleKeyPress = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleIncrementBtn = (e) => {
    if (value >= 99) return;
    setValue(value + 1);
    onchangeQuantity(value + 1);
  };

  const handleDecrementBtn = (e) => {
    if (value <= 1) return;
    setValue(value - 1);
    onchangeQuantity(value - 1);
  };

  return (
    <Container>
      <BtnDecrement onClick={handleDecrementBtn}>-</BtnDecrement>
      <Input
        type="text"
        maxLength={2}
        value={value}
        onChange={onInputChange}
        onKeyPress={handleKeyPress}
      />
      <BtnIncremnet onClick={handleIncrementBtn}>+</BtnIncremnet>
    </Container>
  );
};

export default CustomInputNumber;
