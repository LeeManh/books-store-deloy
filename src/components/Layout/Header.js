import { Input, Badge } from "antd";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import { BiSearchAlt } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { Container } from "../../globalStyles";
import { selectDataCart } from "../../features/cart/cartSlice";
import Auth from "../Auth";

const { Search } = Input;

const HeaderContainer = styled.header`
  background-color: #1a95ff;
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;
const LogoWrapper = styled(Link)`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 666px) {
    display: none;
  }
`;
const LogoImg = styled.img`
  width: 60px;
  height: 40px;
  object-fit: cover;
  margin-bottom: 10px;
`;
const LogoImgUnder = styled.img`
  width: 100px;
`;
const SearchWrapper = styled.div`
  width: 60%;

  @media screen and (max-width: 666px) {
    width: 70%;
  }
`;
const SearchStyled = styled(Search)`
  input.ant-input {
    padding: 0 10px;
  }
  //custom button search
  button {
    background-color: rgb(13, 92, 182);
    border: none;
    outline: none;

    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 5px;
      height: 100%;
    }

    svg {
      font-size: 20px;
    }
  }
`;
const ActionsWrapper = styled.div`
  display: flex;
  column-gap: 30px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  .badgecustom .ant-scroll-number.ant-badge-count {
    color: #242424;
    background: #fdd835;
    box-shadow: none;
    font-weight: bold;
  }
`;
const IconLink = styled(Link)`
  font-size: 30px;
  color: white;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 12px;
  color: white;

  @media screen and (max-width: 666px) {
    display: none;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const dataCart = useSelector(selectDataCart);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSearch = (value) => {
    if (!value.trim()) return;

    navigate(`/search/?title=${value}`);
  };

  return (
    <HeaderContainer>
      <Container>
        <HeaderWrapper>
          <LogoWrapper to="/">
            <LogoImg
              src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
              alt="logo"
            />
            <LogoImgUnder
              src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
              alt="logo-2"
            />
          </LogoWrapper>

          <SearchWrapper>
            <SearchStyled
              placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
              allowClear
              enterButton={
                <>
                  <BiSearchAlt />
                </>
              }
              size="large"
              onSearch={onSearch}
            />
          </SearchWrapper>

          <ActionsWrapper>
            <ButtonWrapper onClick={showModal}>
              <IconLink as={"div"}>
                <AiOutlineUser className="icon" />
              </IconLink>
              <Text>Tài khoản</Text>
            </ButtonWrapper>

            <Auth isModalVisible={isModalVisible} handleCancel={handleCancel} />

            <ButtonWrapper>
              <Badge count={dataCart.length} showZero className="badgecustom">
                <IconLink to="cart">
                  <FiShoppingCart className="icon" />
                </IconLink>
              </Badge>

              <Text>Giỏ hàng</Text>
            </ButtonWrapper>
          </ActionsWrapper>
        </HeaderWrapper>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
