import React, { useState } from "react";
import styled from "styled-components";
import { InputNumber, Row, Col, Tag, message } from "antd";
import { useDispatch, useSelector } from "react-redux";

import BookThumbGallery from "../../components/BookThumbGallery";
import { DividerStyled } from "../../components/common/Devider.styled";
import { requestAddToCart, selectDataCart } from "../cart/cartSlice";
import { numberWithCommas } from "../../unity";
import { ButtonBuy } from "../../components/common/Button.styled";

const DetailsWrapper = styled.div`
  padding: 10px 40px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

const Author = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: rgb(36, 36, 36);
  margin-bottom: 0;
`;

const BookTitle = styled.h2`
  font-size: 18px;
  font-weight: 300;
  color: rgb(36, 36, 36);
  word-break: break-word;
  margin-bottom: 10px;
  line-height: 1.5;
`;

const NumberSales = styled.p`
  font-size: 15px;
  line-height: 24px;
  color: rgb(120, 120, 120);
  margin-bottom: 0;
  margin-top: 10px;
`;
const BookDes = styled.p`
  font-size: 15px;
  /* word-spacing: 0.5px; */
`;
const Price = styled.p`
  font-size: 32px;
  line-height: 40px;
  margin-right: 8px;
  font-weight: 500;
  margin: 0;

  border-radius: 4px;
  background-color: rgb(250, 250, 250);
  padding: 16px;
`;

const QuantityWrapper = styled.div`
  margin-bottom: 20px;
  & > p {
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 5px;
  }
`;

const DetailsBook = ({ book }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const dataCart = useSelector(selectDataCart);

  const onClikedButtonBuy = () => {
    dispatch(requestAddToCart({ id: book.id, quantity }));

    const check = dataCart.some((product) => product.id === book.id);
    if (check) {
      message.error("Sản phẩm đã có trong cửa hàng");
    } else {
      message.success("Đã thêm sản phẩm vào giỏ hàng");
    }
  };

  const onChangedQuantity = (value) => {
    setQuantity(value);
  };

  return (
    <Row>
      <Col xs={{ span: 24, order: 2 }} md={{ span: 8, order: 1 }}>
        <BookThumbGallery images={book.images} />
      </Col>
      <Col xs={{ span: 24, order: 1 }} md={{ span: 16, order: 2 }}>
        <DetailsWrapper>
          <Author>Tác giả: {book.author}</Author>
          <DividerStyled margin="10px 0" />

          <BookTitle>{book.title}</BookTitle>
          <div>
            <Tag>
              <a href="#">{book.category}</a>
            </Tag>
          </div>

          <NumberSales>Đã bán 2</NumberSales>
          <DividerStyled margin="10px 0" />

          <BookDes>{book.description.des}</BookDes>
          <DividerStyled />

          <Price>{numberWithCommas(book.price)} ₫</Price>
          <DividerStyled />

          <QuantityWrapper>
            <p>Số Lượng : </p>
            <InputNumber
              min={1}
              max={99}
              defaultValue={1}
              onChange={onChangedQuantity}
              value={quantity}
            />
          </QuantityWrapper>
          <ButtonBuy onClick={onClikedButtonBuy}>Chọn mua</ButtonBuy>
        </DetailsWrapper>
      </Col>
    </Row>
  );
};

export default DetailsBook;
