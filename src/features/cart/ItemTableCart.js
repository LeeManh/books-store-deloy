import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { BiTrash } from "react-icons/bi";
import Checkbox from "./CheckBox";
import CustomInputNumber from "../../components/customIndexNum";
import Icon from "../../components/Icon";
import { DividerStyled } from "../../components/common/Devider.styled";
import { numberWithCommas } from "../../unity";
import { ColTableCart } from "../../globalStyles";
import { changeQuantity, deleteProductInCart } from "./cartSlice";

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  color: #242424;
  font-size: 13px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  column-gap: 5px;
`;
const Title = styled(Link)`
  line-height: 1.3;
  color: #242424;
`;
const ImgProduct = styled.img`
  min-width: 78px;
  width: 78px;
  height: 80px;
  object-fit: contain;
  border-radius: 5px;
  margin-right: 10px;
  border: 1px solid #787878;

  @media screen and (max-width: 630px) {
    display: none;
  }
`;
const Price = styled.p`
  font-weight: 500;
`;
const TotalPrice = styled(Price)`
  color: #ff424e;
`;

//component

const ItemTableCart = ({
  product,
  handleClick,
  listChecked,
  setListChecked,
}) => {
  const dispatch = useDispatch();

  //change quantity
  const onchangeQuantity = (value) => {
    dispatch(changeQuantity({ id: product.id, quantity: value }));
  };

  //delete 1 product
  const handleDelele = () => {
    const _listChecked = [...listChecked];
    const result = _listChecked.filter((list) => list !== product.id);

    setListChecked(result);
    dispatch(deleteProductInCart({ id: product.id }));
  };

  return (
    <>
      <CartItemContainer>
        <ColTableCart>
          <Wrapper>
            <Checkbox
              type="checkbox"
              id={product.id}
              handleClick={handleClick}
              isChecked={listChecked.includes(product.id)}
            />
            <Link to={`/books/${product.id}`}>
              <ImgProduct src={product.images[0]} alt="image product" />
            </Link>

            <Title to={`/books/${product.id}`}>
              {product.title.substring(0, 80)}
              {product.title > 80 ? "..." : ""}
            </Title>
          </Wrapper>
        </ColTableCart>

        <ColTableCart>
          <Price>{numberWithCommas(product.price)} ₫</Price>
        </ColTableCart>

        <ColTableCart>
          <div style={{ float: "right" }}>
            <CustomInputNumber
              quantity={product.quantity}
              onchangeQuantity={onchangeQuantity}
            />
          </div>
        </ColTableCart>

        <ColTableCart>
          <TotalPrice>
            {numberWithCommas(product.quantity * product.price)} ₫
          </TotalPrice>
        </ColTableCart>

        <ColTableCart>
          <Icon icon={<BiTrash />} onClick={handleDelele} />
        </ColTableCart>
      </CartItemContainer>
      <DividerStyled />
    </>
  );
};

export default ItemTableCart;
