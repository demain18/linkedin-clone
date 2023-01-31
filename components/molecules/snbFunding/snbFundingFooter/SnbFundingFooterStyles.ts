import styled, { css } from "styled-components";
import { Props } from "./SnbFundingFooter";

export const SnbFundingFooterStyled = styled.div`
  padding: 12px 0px;
  border-top: 1px solid ${(props) => props.theme.grayPoint2};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SeeMoreWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const SeeMoreIconWrap = styled.div`
  color: ${(props) => props.theme.primary};
`;
