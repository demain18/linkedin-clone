import styled, { css } from "styled-components";
import { Props } from "./GnbMenus";
import { palette } from "../../../styles/paletteStyles";

export const GnbMenusStyled = styled.div<Props>`
  display: flex;
`;

export const MenuStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 80px;
  align-items: center;
  cursor: pointer;
  transition: 0.1s;
  transition-timing-function: ease;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  user-select: none;

  color: ${palette.grayPoint6};
  span {
    color: ${palette.grayPoint6};
  }

  :hover {
    color: black;
    span {
      color: black;
    }
  }
`;
