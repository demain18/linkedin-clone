import { layoutWidth, nonSelect } from "@/styles/moduleStyles";

import {
  transitionHover,
  // transitionPoint05Hover,
} from "@/styles/transitionStyles";
import styled, { css } from "styled-components";
import { Props } from "./SnbProfileButton";

export const SnbProfileButtonStyled = styled.div<Props>`
  position: relative;
  /* max-width: ${layoutWidth.snbProflie}px; */
  width: 100%;
  /* background-color: ${(props) => props.theme.white}; */
  padding: 4px 12px;
  cursor: pointer;
  ${nonSelect}
  ${transitionHover}
  box-sizing: border-box;

  :hover {
    background-color: ${(props) => props.theme.grayPoint1};
    /* border: 1px solid blue; */
  }

  ${(props) =>
    props.jumbo &&
    css`
      padding: 12px;
    `}
`;
