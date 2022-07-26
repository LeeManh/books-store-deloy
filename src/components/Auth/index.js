import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

const ModalCustom = styled(Modal)`
  font-family: "Roboto", sans-serif;

  .ant-modal-content {
    border-radius: 20px;
    background-color: #ffffff;
    overflow: hidden;
  }

  .ant-modal-body {
    padding: 0;
  }

  //hide footer
  .ant-modal-footer {
    display: none;
  }
`;

const IconBack = styled(IoIosArrowBack)`
  font-size: 21px;
  cursor: pointer;
  color: #777777;
`;

const Container = styled.div`
  display: flex;

  @media screen and (max-width: 670px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 500px;
  padding: 20px 45px 24px;

  @media screen and (max-width: 670px) {
    width: 100%;
  }
`;

const Heading = styled.div`
  color: #242424;
  margin-bottom: 20px;
`;
const HeadingTitle = styled.h4`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const HeadingText = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

const CreateAccount = styled.div`
  color: #787878;
  font-size: 13px;
  text-align: center;

  span {
    color: #0d5cb6;
    display: inline-block;
    margin-left: 5px;
    cursor: pointer;
  }
`;

const Right = styled.div`
  width: 300px;
  text-align: center;
  background: linear-gradient(
    136deg,
    rgb(240, 248, 255) -1%,
    rgb(219, 238, 255) 85%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 670px) {
    width: 100%;
    padding: 20px 0;
  }
`;
const RightImg = styled.img`
  width: 203px;
  height: 203px;
  object-fit: contain;

  @media screen and (max-width: 670px) {
    width: 180px;
    height: 180px;
  }
`;
const RightText = styled.div`
  margin-top: 20px;
  color: rgb(11, 116, 229);
  font-weight: 500;

  h4 {
    margin: 0px 0px 5px;
    font-size: 17px;
    color: rgb(11, 116, 229);
  }
  p {
    font-size: 13px;
  }
`;

const Auth = ({ isModalVisible, handleCancel }) => {
  const [form] = Form.useForm();
  const [isCreatAccount, setIsCreatAccount] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);

    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleClickCreateAccount = () => {
    setIsCreatAccount(true);
  };

  return (
    <ModalCustom visible={isModalVisible} onCancel={handleCancel} width={800}>
      <Container>
        <Left>
          {isCreatAccount && (
            <IconBack onClick={() => setIsCreatAccount(false)} />
          )}

          <Heading>
            {!isCreatAccount ? (
              <>
                <HeadingTitle>Đăng nhập bằng email</HeadingTitle>
                <HeadingText>Nhập email và mật khẩu tài khoản Tiki</HeadingText>
              </>
            ) : (
              <>
                <HeadingTitle>Đăng ký bằng email</HeadingTitle>
                <HeadingText>
                  Vui lòng nhập email và mật khẩu tài khoản Tiki
                </HeadingText>
              </>
            )}
          </Heading>

          <Form
            form={form}
            name="basic"
            wrapperCol={{
              span: 24,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="user"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên tài khoản!",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Tên tài khoản" />
            </Form.Item>

            <Form.Item
              name="pwd"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu ",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Mật khẩu" />
            </Form.Item>

            {isCreatAccount && (
              <Form.Item
                name="confirm"
                dependencies={["pwd"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập xác nhập mật khẩu",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("pwd") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error("Xác nhận mật khẩu không khớp!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Xác nhận mật khẩu" />
              </Form.Item>
            )}

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              {!isCreatAccount ? (
                <Button
                  type="primary"
                  danger={true}
                  size={"large"}
                  htmlType="submit"
                >
                  Đăng nhập
                </Button>
              ) : (
                <Button
                  type="primary"
                  danger={true}
                  size={"large"}
                  htmlType="submit"
                >
                  Đăng kí
                </Button>
              )}
            </Form.Item>
          </Form>

          <CreateAccount>
            {!isCreatAccount ? (
              <>
                Chưa có tài khoản?
                <span onClick={handleClickCreateAccount}> Tạo tài khoản</span>
              </>
            ) : (
              "Bằng việc tiếp tục, bạn đã chấp nhận điều khoản sử dụng"
            )}
          </CreateAccount>
        </Left>

        <Right>
          <RightImg
            src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
            alt=""
          />
          <RightText>
            <h4>Mua sắm tại Tiki</h4>
            <p> Siêu ưu đãi mỗi ngày</p>
          </RightText>
        </Right>
      </Container>
    </ModalCustom>
  );
};

export default Auth;
