import { nonClick } from "@/styles/moduleStyles";
import { palette } from "@/styles/paletteStyles";
import { transitionHover } from "@/styles/transitionStyles";
import styled, { css } from "styled-components";
import { Props } from "./SnbProfileButton";

export const SnbProfileButtonStyled = styled.div<Props>`
  max-width: 225px;
  background-color: #fff;
  padding: 4px 12px;
  cursor: pointer;
  ${nonClick}
  ${transitionHover}

  :hover {
    background-color: ${palette.grayPoint2};
  }
`;
