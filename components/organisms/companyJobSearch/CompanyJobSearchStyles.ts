import { boxRadius } from "@/styles/moduleStyles";
import styled, { css } from "styled-components";
import { Props } from "./CompanyJobSearch";

export const CompanyJobSearchStyled = styled.div<Props>`
  position: relative;
  padding: 16px;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.grayPoint1};
  ${boxRadius}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchWrap = styled.div`
  margin-top: 12px;
  display: flex;
  width: 100%;
  padding: 0px 48px;
  gap: 12px;
`;
