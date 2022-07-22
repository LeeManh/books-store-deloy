import styled from "styled-components";
import { Divider } from "antd";

export const DividerStyled = styled(Divider)`
  margin: ${({ margin }) => (margin ? margin : "10px 0")};
`;
