import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Section } from "../../globalStyles";

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;
const EmptyImg = styled.img`
  width: 190px;
  margin-bottom: 20px;
`;
const EmptyText = styled.p`
  margin-bottom: 20px;
`;

const EmptyButton = styled(Link)`
  border: none;
  outline: none;
  padding: 10px 55px;
  border-radius: 5px;
  background-color: rgb(253, 216, 53);
  color: rgb(74, 74, 74);
  font-weight: 500;
`;

const CartEmpty = () => {
  return (
    <Section>
      <EmptyContainer>
        <EmptyImg
          src="https://salt.tikicdn.com/desktop/img/mascot@2x.png"
          alt="empty cart"
        />
        <EmptyText>Không có sản phẩm nào trong giỏ hàng của bạn.</EmptyText>
        <EmptyButton to="/">Tiếp tục mua sắm</EmptyButton>
      </EmptyContainer>
    </Section>
  );
};

export default CartEmpty;
