import { boxRadius } from "@/styles/moduleStyles";
import styled, { css } from "styled-components";
import { Props } from "./SnbPageRecommend";

export const SnbPageRecommendStyled = styled.div<Props>`
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.grayPoint1};
  ${boxRadius}
  overflow: hidden;
`;

export const HeaderWrap = styled.div`
  padding: 16px;
`;

export const ContentWrap = styled.div`
  padding: 0px 16px;
  margin-bottom: 12px;
`;
