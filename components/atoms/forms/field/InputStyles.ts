import { palette } from "@/styles/paletteStyles";
import styled, { css } from "styled-components";
import { Props } from "./Input";

export const InputStyled = styled.input`
  width: 100%;
  line-height: 1.75;
  font-weight: 400;
  padding: 8px 16px;
  /* background-color: ${palette.lightGray}; */
  background-color: ${palette.grayPoint1};
  border-radius: 0.4rem;
  color: ${palette.grayPoint8};
  border: none;

  ::placeholder {
    color: ${palette.grayPoint4};
  }
`;
