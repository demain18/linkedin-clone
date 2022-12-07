import { nonSelect } from "@/styles/moduleStyles";
import { palette } from "@/styles/paletteStyles";
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

  color: ${palette.grayPoint6};
  span {
    color: ${palette.grayPoint6};
  }

  :hover {
    color: ${palette.black};
    span {
      color: ${palette.black};
    }
  }

  ${(props) =>
    props.active
      ? css`
          border-bottom: 2px solid ${palette.black};
          color: ${palette.black};
          span {
            color: ${palette.black};
          }
        `
      : undefined}
`;
