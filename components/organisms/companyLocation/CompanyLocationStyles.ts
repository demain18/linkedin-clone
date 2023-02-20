import { boxRadius } from "@/styles/moduleStyles";
import styled, { css } from "styled-components";
import { Props } from "./CompanyLocation";

export const CompanyLocationStyled = styled.div<Props>`
  position: relative;
  background-color: ${(props) => props.theme.white};
  padding: 24px;
  border: 1px solid ${(props) => props.theme.grayPoint1};
  ${boxRadius}
  overflow: hidden;
`;

export const InfoWrap = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
`;

export const LabelWrap = styled.div`
  margin-bottom: 3px;
`;

export const LinkStyled = styled.div`
  color: ${(props) => props.theme.primary};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 3px;
  margin-top: 3px;

  :hover {
    text-decoration: underline;
  }
`;
