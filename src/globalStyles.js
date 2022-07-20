import styled, { createGlobalStyle } from "styled-components";
import resetCss from "./external/resetCss.css";

export const GlobalStyles = createGlobalStyle`
  ${resetCss}

  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    line-height: 1.6;
  }

  body {
    background-color: #f6f5fa;
  }
  img {
    max-width: 100%;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }

`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
`;

export const Section = styled.section`
  margin-bottom: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
`;

export const ColTableCart = styled.div`
  &:first-child {
    flex: 1;
  }
  &:not(:first-child) {
    text-align: end;
    width: 140px;

    @media screen and (max-width: 826px) {
      width: 120px;
    }
    @media screen and (max-width: 740px) {
      width: 100px;
    }
  }
`;
