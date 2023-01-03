import styled, { css } from "styled-components";
import { palette } from "@/styles/paletteStyles";
import { Props } from "./Span";

export const SpanStyled = styled.span<Props>`
  font-weight: normal;
  line-height: 1.5;
  color: ${(props) => props.theme.grayPoint8};

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
