import { palette } from "@/styles/paletteStyles";
import styled, { css } from "styled-components";
import { Props } from "./P";

export const PStyled = styled.p<Props>`
  font-weight: normal;
  line-height: 1.5;
  color: ${palette.grayPoint8};
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
    css`
      color: ${palette[props.color as keyof typeof palette]};
    `}
`;
