import { boxRadius } from "@/styles/moduleStyles";
import styled, { css } from "styled-components";
import { Props } from "./CompanyBanner";

export const CompanyBannerStyled = styled.div<Props>`
  background-color: ${(props) => props.theme.white};
  ${boxRadius}
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.grayPoint1};
  margin-bottom: 24px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-content: center;
  padding: 0px 24px;
  margin-top: 16px;
  gap: 8px;
`;

export const ButtonContentWrap = styled.div`
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;
`;

export const MenuWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.grayPoint1};
  padding: 0px 5px;
`;
