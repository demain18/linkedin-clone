import { palette } from "@/styles/paletteStyles";
import styled, { css } from "styled-components";
import { Props } from "./H1";

const HSizes = [0.87, 0.93, 1.12, 1.5, 1.75];

export const HStyled = styled.h1<Props>`
  font-size: 1.75rem;
  font-weight: bold;
  line-height: 1.29;
  color: ${palette.grayPoint8};
  ${(props) =>
    css`
      font-size: ${props.fontSize !== undefined
        ? HSizes[props.fontSize]
        : HSizes[0]}rem;
    `}
`;
