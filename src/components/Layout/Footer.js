import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";

import { Container, Section } from "../../globalStyles";

const List = styled.ul``;
const ListItem = styled.li`
  margin-bottom: 30px;
`;
const Box = styled.div`
  margin-bottom: 20px;
`;
const ListHeading = styled.h3`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: rgb(56, 56, 61);
  margin-bottom: 12px;
`;
const ListText = styled.p`
  font-size: 13px;
  margin-bottom: 8px;
  color: rgb(128, 128, 137);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
const ImgSquare = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;
const ImgLong = styled.img`
  width: 80px;
  height: 32px;
  margin-right: 10px;
`;
const IconBtn = styled.span`
  font-size: 24px;
  cursor: pointer;
  display: inline-block;
  margin-right: 15px;
`;

const Footer = () => {
  return (
    <Container>
      <Section>
        <List>
          <Row>
            <Col xs={24} sm={12} md={12} lg={6}>
              <ListItem>
                <ListHeading>Hỗ trợ khách hàng</ListHeading>
                <ListText>
                  Hotline: <span>1900-6035</span> <br /> (1000 đ/phút, 8-21h kể
                  cả T7, CN)
                </ListText>
                <ListText>Các câu hỏi thường gặp</ListText>
                <ListText>Gửi yêu cầu hỗ trợ </ListText>
                <ListText>Hướng dẫn đặt hàng</ListText>
                <ListText>Phương thức vận chuyển</ListText>
              </ListItem>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6}>
              <ListItem>
                <ListHeading>Về chúng tôi</ListHeading>
                <ListText>Giới thiệu Tiki</ListText>
                <ListText>Tuyển dụng</ListText>
                <ListText>Chính sách bảo mật thanh toán</ListText>
                <ListText>Chính sách bảo mật thông tin cá nhân</ListText>
                <ListText>Chính sách giải quyết khiếu nại</ListText>
              </ListItem>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6}>
              <ListItem>
                <Box>
                  <ListHeading>Hợp tác và liên kết</ListHeading>
                  <ListText>Quy chế hoạt động Sàn GDTMĐT</ListText>
                  <ListText>Bán hàng cùng Tiki</ListText>
                </Box>
                <Box>
                  <ListHeading>Chứng nhận bởi</ListHeading>
                  <ListText>Quy chế hoạt động Sàn GDTMĐT</ListText>
                  <ListText>Bán hàng cùng Tiki</ListText>
                  <ImgSquare
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
                    alt=""
                  />
                  <ImgLong
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
                    alt=""
                  />
                </Box>
              </ListItem>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6}>
              <ListItem>
                <ListHeading>Kết nối với chúng tôi</ListHeading>
                <Box>
                  <IconBtn>
                    <BsFacebook />
                  </IconBtn>

                  <IconBtn>
                    <BsYoutube />
                  </IconBtn>

                  <IconBtn>
                    <BsTwitter />
                  </IconBtn>
                </Box>
              </ListItem>
            </Col>
          </Row>
        </List>
      </Section>
    </Container>
  );
};

export default Footer;
