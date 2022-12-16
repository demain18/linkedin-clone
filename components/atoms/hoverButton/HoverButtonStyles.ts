import { palette } from "@/styles/paletteStyles";
import { transitionHover } from "@/styles/transitionStyles";
import styled, { css } from "styled-components";
import { Props } from "./HoverButton";

export const HoverButtonStyled = styled.div<Props>`
  cursor: pointer;

  :hover {
    ${transitionHover}
    background-color: ${palette.grayPoint1};
  }
`;
