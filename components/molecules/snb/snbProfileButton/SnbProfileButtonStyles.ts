import { layoutWidth, nonSelect } from "@/styles/moduleStyles";
import { palette } from "@/styles/paletteStyles";
import {
  transitionHover,
  // transitionPoint05Hover,
} from "@/styles/transitionStyles";
import styled, { css } from "styled-components";
import { Props } from "./SnbProfileButton";

export const SnbProfileButtonStyled = styled.div<Props>`
  max-width: ${layoutWidth.snbProflie}px;
  background-color: #fff;
  padding: 4px 12px;
  cursor: pointer;
  ${nonSelect}
  /* ${transitionHover} */

  box-sizing: border-box;

  :hover {
    background-color: ${palette.grayPoint1};
  }
`;
