import React from "react";
import styled from "styled-components";

const Checkmark = styled.div``;

const CheckBoxLabel = styled.label`
  cursor: pointer;
`;

const CheckBoxInput = styled.input`
  cursor: pointer;
`;

const CheckboxCotainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  cursor: pointer;
`;

const Checkbox = ({ id, type, name, handleClick, isChecked, label }) => {
  return (
    <CheckboxCotainer>
      <CheckBoxInput
        id={id}
        name={name}
        type={type}
        onChange={handleClick}
        checked={isChecked}
      />
      <Checkmark />
      {label ? <CheckBoxLabel htmlFor={id}>{label}</CheckBoxLabel> : ""}
    </CheckboxCotainer>
  );
};

export default Checkbox;
