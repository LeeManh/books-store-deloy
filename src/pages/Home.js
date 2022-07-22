import React from "react";
import styled from "styled-components";

import { Section } from "../globalStyles";
import Banner from "../components/Banner";
import ListBooks from "../features/books/ListBooks";
import FilterBook from "../features/filter/FilterBook";
import InputFilter from "../features/filter/InputFilter";
import Pagination from "../components/Pagination";
import Sort from "../features/filter/Sort";

const HomeWrapper = styled.div`
  --width-filter: 240px;
  display: flex;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;
const FilterContainer = styled.div`
  width: var(--width-filter);

  padding: 10px;

  @media screen and (max-width: 992px) {
    --width-filter: 200px;
    padding: 5px;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
const Title = styled.h2`
  margin-bottom: 20px;
`;
const Content = styled.div`
  width: calc(100% - var(--width-filter));

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
const PaginationWrapper = styled.div`
  text-align: end;
`;

const Home = () => {
  return (
    <Section>
      <HomeWrapper>
        <FilterContainer>
          <FilterBook />
        </FilterContainer>

        <Content>
          <Title>Nhà Sách Tiki</Title>
          <Banner />
          <Sort />
          <InputFilter />
          <ListBooks />
          <PaginationWrapper>
            <Pagination />
          </PaginationWrapper>
        </Content>
      </HomeWrapper>
    </Section>
  );
};

export default Home;
