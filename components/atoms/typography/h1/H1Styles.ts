import styled, { css } from "styled-components";
import { Props } from "./H1";

const HSizes = [0.87, 0.93, 1.12, 1.5, 1.75];

export const HStyled = styled.h1<Props>`
  font-size: 1.75rem;
  font-weight: bold;
  line-height: 1.29;
  color: ${(props) => props.theme.grayPoint8};
  margin: 0;

  ${(props) =>
    css`
      font-size: ${props.fontSize !== undefined
        ? HSizes[props.fontSize]
        : HSizes[0]}rem;
    `}

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}

    ${(props) =>
    css`
      color: ${props.theme[props.color!]};
    `}
`;
