import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  outline: none;
  border: 1px solid #b8b8b8;
  border-radius: 4px;
  width: 95px;
  height: 30px;
  padding: 0 8px;
  width: 100%;
`;

const InputNumberStyled = ({ name = "" }) => {
  const [value, setValue] = useState(0);

  const onChange = (e) => {
    setValue(Number(e.target.value));
  };

  const onKeyPress = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <Input
      type="text"
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
      name={name}
    />
  );
};

export default InputNumberStyled;
