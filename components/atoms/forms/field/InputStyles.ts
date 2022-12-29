import { palette } from "@/styles/paletteStyles";
import styled, { css } from "styled-components";
import { Props } from "./Input";

export const InputStyled = styled.input`
  width: 100%;
  line-height: 1.75;
  font-weight: 400;
  padding: 8px 16px;
  background-color: ${palette.lightGray};
  border-radius: 0.4rem;
  color: rgba(0, 0, 0, 0.9);
  border: none;

  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;
