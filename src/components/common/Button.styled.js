import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  border: none;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#ff3946")};
  border-radius: 5px;
  color: ${({ color }) => (color ? color : "white")};
  padding: 10px;
  cursor: pointer;
`;

export const ButtonBuy = styled(Button)`
  width: 100%;
  max-width: 300px;
  height: 48px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
