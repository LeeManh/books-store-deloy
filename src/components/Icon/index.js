import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  border: none;
  outline: none;
  font-size: 18px;
  background-color: transparent;
  cursor: pointer;
  color: #787878;
  transition: 0.5s ease;

  &:hover {
    color: black;
  }
`;

const Icon = ({ icon, onClick = null }) => {
  return <Btn onClick={onClick}>{icon}</Btn>;
};

export default Icon;
