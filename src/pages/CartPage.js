import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Section } from "../globalStyles";
import { selectDataCart } from "../features/cart/cartSlice";
import CartEmpty from "../features/cart/CartEmpty";
import ItemTableCart from "../features/cart/ItemTableCart";
import { deleteAllProductInCart } from "../features/cart/cartSlice";
import Bill from "../features/cart/Bill";
import HeadingTableCart from "../features/cart/HeadingTableCart";

const CartContainer = styled.div`
  display: flex;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;
const CartProductsWrapper = styled.div`
  width: 925px;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;
const CartBillWarapper = styled.div`
  flex: 1;
  padding: 0 20px;
`;
const ProductTableCotnainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// component start
const CartPage = () => {
  const dispatch = useDispatch();
  const dataCart = useSelector(selectDataCart);

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [listChecked, setListChecked] = useState([]);
  const [list, setList] = useState([]);

  const listIds = useMemo(() => dataCart.map((li) => li.id), [dataCart]);

  useEffect(() => {
    setList(listIds);
  }, [listIds]);

  //handle click check all
  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);

    setListChecked(listIds);
    if (isCheckAll) {
      setListChecked([]);
    }
  };

  //handle click check
  const handleClick = (e) => {
    let { id, checked } = e.target;
    id = Number(id);

    if (checked) {
      const _listChecked = [...listChecked, id];
      setListChecked(_listChecked);
      setIsCheckAll(_listChecked.length === list.length);
    }

    if (!checked) {
      setListChecked(listChecked.filter((item) => item !== id));
      setIsCheckAll(false);
    }
  };

  //render cart item
  const renderTableCart = dataCart.map((product) => (
    <div key={product.id}>
      <ItemTableCart
        product={product}
        handleClick={handleClick}
        listChecked={listChecked}
        setListChecked={setListChecked}
      />
    </div>
  ));

  //delete all
  const handleDeleteAll = () => {
    if (isCheckAll) {
      dispatch(deleteAllProductInCart());
    }
  };

  if (dataCart.length === 0) {
    return <CartEmpty />;
  }

  return (
    <CartContainer>
      <CartProductsWrapper>
        <HeadingTableCart
          handleSelectAll={handleSelectAll}
          isCheckAll={isCheckAll}
          handleDeleteAll={handleDeleteAll}
        />

        <Section>
          <ProductTableCotnainer>{renderTableCart}</ProductTableCotnainer>
        </Section>
      </CartProductsWrapper>

      <CartBillWarapper>
        <Bill listChecked={listChecked} />
      </CartBillWarapper>
    </CartContainer>
  );
};

export default CartPage;
