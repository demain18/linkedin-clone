import styled, { css } from "styled-components";
import { Props } from "./Label";

export const LabelStyled = styled.div<Props>`
  position: relative;
  display: inline-block;
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.grayPoint9};
  background-color: ${(props) => props.theme.grayPoint1};
`;
