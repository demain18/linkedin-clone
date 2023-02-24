import { nonSelect } from "@/styles/moduleStyles";
import { transitionHover } from "@/styles/transitionStyles";
import styled, { css } from "styled-components";
import { Props } from "./SnbPageRecommendFooter";

export const SnbPageRecommendFooterStyled = styled.div<Props>`
  padding: 10px 8px;
  text-align: center;
  cursor: pointer;
  border-top: 1px solid ${(props) => props.theme.grayPoint1};
  ${transitionHover}
  ${nonSelect}

  :hover {
    background-color: ${(props) => props.theme.grayPoint1};
  }
`;
