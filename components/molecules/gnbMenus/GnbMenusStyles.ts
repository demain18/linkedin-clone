import styled, { css } from "styled-components";
import { MenuProps } from "./GnbMenus";
import { palette } from "@/styles/paletteStyles";

export const GnbMenusStyled = styled.div`
  display: flex;
`;

export const MenuStyled = styled.div<MenuProps>`
  display: flex;
  flex-direction: column;
  width: 80px;
  align-items: center;
  padding-bottom: 3px;
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
    color: ${palette.black};
    span {
      color: ${palette.black};
    }
  }

  ${(props) =>
    props.active
      ? css`
          border-bottom: 2px solid ${palette.black};
          color: ${palette.black};
          span {
            color: ${palette.black};
          }
        `
      : undefined}
`;
