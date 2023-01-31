import styled, { css } from "styled-components";
import { Props } from "./SnbFundingHeader";

export const SnbFundingHeaderStyled = styled.div`
  padding: 16px 16px 12px 16px;
  border-bottom: 1px solid ${(props) => props.theme.grayPoint2};
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

export const IconWrap = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  color: ${(props) => props.theme.grayPoint6};
  cursor: pointer;
`;
