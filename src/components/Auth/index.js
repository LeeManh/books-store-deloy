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
                <HeadingTitle>????ng nh???p b???ng email</HeadingTitle>
                <HeadingText>Nh???p email v?? m???t kh???u t??i kho???n Tiki</HeadingText>
              </>
            ) : (
              <>
                <HeadingTitle>????ng k?? b???ng email</HeadingTitle>
                <HeadingText>
                  Vui l??ng nh???p email v?? m???t kh???u t??i kho???n Tiki
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
                  message: "Vui l??ng nh???p t??n t??i kho???n!",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="T??n t??i kho???n" />
            </Form.Item>

            <Form.Item
              name="pwd"
              rules={[
                {
                  required: true,
                  message: "Vui l??ng nh???p m???t kh???u ",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="M???t kh???u" />
            </Form.Item>

            {isCreatAccount && (
              <Form.Item
                name="confirm"
                dependencies={["pwd"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Vui l??ng nh???p x??c nh???p m???t kh???u",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("pwd") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error("X??c nh???n m???t kh???u kh??ng kh???p!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="X??c nh???n m???t kh???u" />
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
                  ????ng nh???p
                </Button>
              ) : (
                <Button
                  type="primary"
                  danger={true}
                  size={"large"}
                  htmlType="submit"
                >
                  ????ng k??
                </Button>
              )}
            </Form.Item>
          </Form>

          <CreateAccount>
            {!isCreatAccount ? (
              <>
                Ch??a c?? t??i kho???n?
                <span onClick={handleClickCreateAccount}> T???o t??i kho???n</span>
              </>
            ) : (
              "B???ng vi???c ti???p t???c, b???n ???? ch???p nh???n ??i???u kho???n s??? d???ng"
            )}
          </CreateAccount>
        </Left>

        <Right>
          <RightImg
            src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
            alt=""
          />
          <RightText>
            <h4>Mua s???m t???i Tiki</h4>
            <p> Si??u ??u ????i m???i ng??y</p>
          </RightText>
        </Right>
      </Container>
    </ModalCustom>
  );
};

export default Auth;
