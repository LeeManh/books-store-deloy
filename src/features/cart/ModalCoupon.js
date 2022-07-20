import React, { useState } from "react";
import { Modal } from "antd";
import styled from "styled-components";

const ModalCustom = styled(Modal)``;

const ModalCoupon = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <p onClick={showModal}>Chọn hoặc nhập Khuyến mãi khác</p>

      <ModalCustom
        title="Tiki Khuyến Mãi"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="test"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </ModalCustom>
    </>
  );
};

export default ModalCoupon;
