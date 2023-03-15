import { linkHover } from "@/styles/moduleStyles";
import { transitionHover } from "@/styles/transitionStyles";
import styled, { css } from "styled-components";
import { Props } from "./Redirect";

export const RedirectStyled = styled.div``;

export const ContentWrap = styled.div`
  p:hover {
    cursor: pointer;
    ${transitionHover}
    ${linkHover}
  }
`;
