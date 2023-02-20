import styled, { css } from "styled-components";
import { Props } from "./CompanyJobsRecentFooter";

export const CompanyJobsRecentFooterStyled = styled.div<Props>`
  padding: 12px 0px;
  border-top: 1px solid ${(props) => props.theme.grayPoint1};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SeeJobsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
