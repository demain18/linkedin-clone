import { palette } from "@/styles/paletteStyles";
import { transitionHover } from "@/styles/transitionStyles";
import styled, { css } from "styled-components";
import { Props } from "./RoundButton";

export const RoundButtonStyled = styled.button<Props>`
  position: relative;
  border: 1px solid ${palette.grayPoint6};
  background-color: rgba(0, 0, 0, 0);
  padding: 4px 16px;
  border-radius: 1.6rem;
  color: ${palette.grayPoint6};
  font-weight: 600;
  cursor: pointer;
  ${transitionHover}

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 0 1px ${palette.grayPoint6};
  }
`;
