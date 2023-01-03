import { palette } from "@/styles/paletteStyles";
import { transitionHover } from "@/styles/transitionStyles";
import styled, { css } from "styled-components";
import { Props } from "./HoverButton";

export const HoverButtonStyled = styled.div<Props>`
  cursor: pointer;
  border-radius: 4px;
  box-sizing: border-box;

  :hover {
    ${transitionHover}
    background-color: ${(props) => props.theme.grayPoint1};
  }

  ${(props) =>
    props.full &&
    css`
      width: 100%;
    `}
`;
