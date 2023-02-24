import { boxRadius } from "@/styles/moduleStyles";
import styled, { css } from "styled-components";
import { Props } from "./CompanyOverview";

export const CompanyOverviewStyled = styled.div<Props>`
  padding: 24px;
  border: 1px solid ${(props) => props.theme.grayPoint1};
  ${boxRadius}
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${(props) => props.theme.white};
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
