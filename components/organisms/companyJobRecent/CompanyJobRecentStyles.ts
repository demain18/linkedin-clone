import { boxRadius } from "@/styles/moduleStyles";
import styled, { css } from "styled-components";
import { Props } from "./CompanyJobRecent";

export const CompanyJobRecentStyled = styled.div<Props>`
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.grayPoint1};
  ${boxRadius}
`;

export const HeaderWrap = styled.div`
  width: 100%;
  padding: 16px 24px 0px 24px;
  position: relative;
`;

export const CarouselMenuWrap = styled.div`
  position: absolute;
  top: 16px;
  right: 24px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const CarouselWrap = styled.div`
  padding: 12px 24px;
`;
