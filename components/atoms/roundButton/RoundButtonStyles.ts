import { transitionHover } from "@/styles/transitionStyles";
import styled, { css } from "styled-components";
import { Props } from "./RoundButton";

export const RoundButtonStyled = styled.button<Props>`
  position: relative;
  border: 1px solid ${(props) => props.theme.grayPoint6};
  background-color: rgba(0, 0, 0, 0);
  padding: 4px 16px;
  border-radius: 1.6rem;
  color: ${(props) => props.theme.grayPoint6};
  font-weight: 600;
  cursor: pointer;
  ${transitionHover}
  :hover {
    background-color: ${(props) => props.theme.grayPoint1};
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.grayPoint6};
  }

  ${(props) =>
    props.full &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.alignLeft &&
    css`
      text-align: left;
    `}

  ${(props) =>
    css`
      border: 1px solid ${props.theme[props.color!]};
      p,
      span,
      h1,
      svg {
        color: ${props.theme[props.color!]}!important;
      }

      :hover {
        background-color: ${props.theme[props.color!]}20;
        box-shadow: inset 0 0 0 1px ${props.theme[props.color!]};
      }
    `}
`;
