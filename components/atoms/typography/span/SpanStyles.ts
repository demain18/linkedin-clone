import styled, { css } from "styled-components";
import { palette } from "../../../../styles/paletteStyles";
import { Props } from "./Span";

export const SpanStyled = styled.span<Props>`
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.8);

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
