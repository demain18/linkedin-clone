import { nonSelect } from "@/styles/moduleStyles";

import { transitionHover } from "@/styles/transitionStyles";
import styled, { css } from "styled-components";
import { Props } from "./GnbButton";

export const GnbButtonStyled = styled.div<Props>`
  width: 80px;
  padding: 5px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  ${nonSelect}
  ${transitionHover}

  color: ${(props) => props.theme.grayPoint6};
  span {
    color: ${(props) => props.theme.grayPoint6};
  }

  :hover {
    color: ${(props) => props.theme.black};
    span {
      color: ${(props) => props.theme.black};
    }
  }

  ${(props) =>
    props.active
      ? css`
          border-bottom: 2px solid ${(props) => props.theme.black};
          color: ${(props) => props.theme.black};
          span {
            color: ${(props) => props.theme.black};
          }
        `
      : undefined}
`;
