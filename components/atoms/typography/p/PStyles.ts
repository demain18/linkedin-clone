import styled, { css } from "styled-components";
import { Props } from "./P";

export const PStyled = styled.p<Props>`
  font-weight: normal;
  line-height: 1.5;
  color: ${(props) => props.theme.grayPoint8};
  margin: 0;

  ${(props) =>
    css`
      font-size: ${props.fontSize}px;
    `}

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}

  ${(props) =>
    props.light &&
    css`
      font-weight: 250;
    `}

  ${(props) =>
    css`
      color: ${props.theme[props.color!]};
    `}
`;
