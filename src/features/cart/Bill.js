import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Modal } from "antd";

import { Section } from "../../globalStyles";
import { ButtonBuy } from "../../components/common/Button.styled";
import { DividerStyled } from "../../components/common/Devider.styled";
import { RiCoupon3Line } from "react-icons/ri";
import { selectCartByIds } from "./cartSlice";
import { numberWithCommas } from "../../unity";
import ModalCoupon from "./ModalCoupon";

const Container = styled.div``;

const Heading1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  & p:first-child {
    color: #808089;
  }
  & p:nth-child(2) {
    color: #0b74e5;
    font-size: 14px;
    cursor: pointer;
  }
`;

const HeadingInfor = styled.div`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  margin-bottom: 2px;

  & p:first-child {
    padding-right: 10px;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      width: 1px;
      height: 100%;
      background-color: #ebebf0;
      right: 0;
      top: 0;
    }
  }
  & p:nth-child(2) {
    padding-left: 10px;
  }
`;
const Adrress = styled.p`
  color: #808089;
  font-size: 14px;
  line-height: 20px;
`;

const Heading2 = styled.div`
  font-size: 13px;
  color: #242424;
  font-weight: 600;
  margin-bottom: 16px;
`;
const ModalCuponWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #0b74e5;
  column-gap: 10px;
  cursor: pointer;

  p {
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
  }
`;

const Temporary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;

  & p:first-child {
    font-weight: 300;
  }
  & p:nth-child(2) {
    font-weight: 500;
    color: #333333;
  }
`;
const Final = styled.div`
  display: flex;
  justify-content: space-between;

  .total-text {
    font-size: 14px;
    font-weight: 300;
    color: #333333;
  }
`;
const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .total-price {
    color: #fe3834;
    font-size: 22px;
    font-weight: 400;
  }

  .vat-text {
    font-weight: 300;
    font-size: 12px;
    color: #333333;
    margin-top: 3px;
  }
`;

const Bill = ({ listChecked }) => {
  // listChecked : chua danh sach cac id product duoc checked
  // dataBill chua danh sach cac san pham dc check
  const dataBill = useSelector((state) => selectCartByIds(state, listChecked));
  // console.log({ listChecked });

  const [coupon, setCoupon] = useState(0);

  const total = useMemo(
    () =>
      dataBill.reduce((sum, item) => {
        return sum + item?.price * item?.quantity;
      }, 0),
    [dataBill]
  );

  const handleClickBuy = () => {
    if (dataBill.length > 0) {
      Modal.success({
        content: "Cảm ơn bạn đã mua hàng",
      });
    }
  };

  return (
    <Container>
      <Section>
        <Heading1>
          <p>Giao tới</p>
          <p>Thay đổi</p>
        </Heading1>
        <HeadingInfor>
          <p>Lê Văn Mạnh</p>
          <p>0123456789</p>
        </HeadingInfor>
        <Adrress>
          Số 2 ngõ 123 Nguyễn Văn Trỗi, Hà Đông, Hà Nội, Phường Mộ Lao, Quận Hà
          Đông, Hà Nội
        </Adrress>
      </Section>

      <Section>
        <Heading2>Tiki Khuyến Mãi</Heading2>
        <ModalCuponWrapper>
          <RiCoupon3Line />
          {/* <p>Chọn hoặc nhập Khuyến mãi khác</p> */}
          <ModalCoupon />
        </ModalCuponWrapper>
      </Section>

      <Section>
        <Temporary>
          <p>Tạm tính</p>
          <p>{numberWithCommas(total)}đ</p>
        </Temporary>
        <DividerStyled />
        <Final>
          <p className="total-text">Tổng tiền</p>
          <Total>
            <p className="total-price">
              {total - coupon < 0 ? 0 : numberWithCommas(total - coupon)} ₫
            </p>
            <p className="vat-text">(Đã bao gồm VAT nếu có)</p>
          </Total>
        </Final>
      </Section>

      <ButtonBuy onClick={handleClickBuy}>
        Mua hàng ({dataBill.length})
      </ButtonBuy>
    </Container>
  );
};

export default Bill;
