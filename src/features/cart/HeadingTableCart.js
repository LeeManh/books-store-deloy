import React from "react";
import styled from "styled-components";
import { BiTrash } from "react-icons/bi";
import { useSelector } from "react-redux";

import Checkbox from "./CheckBox";
import Icon from "../../components/Icon";
import { Section, ColTableCart } from "../../globalStyles";
import { selectDataCart } from "./cartSlice";

const TitleHeadingWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  position: relative;
  color: rgb(36, 36, 36);
  font-weight: 400;
  font-size: 13px;
`;
const TitleHeading = styled(ColTableCart)``;

const HeadingTableCart = ({ handleSelectAll, isCheckAll, handleDeleteAll }) => {
  const dataCart = useSelector(selectDataCart);

  return (
    <Section>
      <TitleHeadingWrapper>
        <TitleHeading>
          <Checkbox
            type="checkbox"
            name="selectAll"
            id="selectAll"
            handleClick={handleSelectAll}
            isChecked={isCheckAll}
            label={`Tất cả (${dataCart.length} sản phẩm)`}
          />
        </TitleHeading>
        <TitleHeading>Đơn giá</TitleHeading>
        <TitleHeading>Số lượng</TitleHeading>
        <TitleHeading>Thành tiền</TitleHeading>
        <TitleHeading>
          <Icon icon={<BiTrash />} onClick={handleDeleteAll} />
        </TitleHeading>
      </TitleHeadingWrapper>
    </Section>
  );
};

export default HeadingTableCart;
