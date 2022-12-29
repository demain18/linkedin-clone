import { palette } from "@/styles/paletteStyles";
import styled, { css } from "styled-components";
import { Props } from "./Button";

export const ButtonStyled = styled.button<Props>`
  padding: 0.56rem 1.56rem;
  border: none;
  border-radius: 4px;
  background-color: ${palette.lightGray};
  font-weight: bold;
  font-size: 0.87rem;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: 0.12s;
  transition-timing-function: ease;

  :hover {
    filter: brightness(90%);
  }

  :active {
    filter: brightness(75%);
  }
`;
