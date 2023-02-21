import { boxRadius } from "@/styles/moduleStyles";
import styled, { css } from "styled-components";
import { Props } from "./CompanyJobAlert";

export const CompanyJobAlertStyled = styled.div<Props>`
  position: relative;
  padding: 12px 16px;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.grayPoint1};
  ${boxRadius};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconStyled = styled.div`
  svg {
    color: ${(props) => props.theme.grayPoint8};
  }
`;
