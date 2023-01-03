import { css } from "styled-components";
import { palette } from "./paletteStyles";

export const nonSelect = css`
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

export const layoutWidth = {
  snbProflie: 225,
  main: 1128,
};

export const linkHover = css`
  color: ${(props) => props.theme.primary};
  text-decoration: underline;
`;
