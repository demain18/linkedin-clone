import { linkHover } from "@/styles/moduleStyles";
import { palette } from "@/styles/paletteStyles";
import { transitionHover } from "@/styles/transitionStyles";
import styled, { css } from "styled-components";
import { Props } from "./TimelineProfile";

export const TimelineProfileStyled = styled.div<Props>`
  p {
    line-height: 1.3;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const BadgeWrap = styled.div`
  display: flex;
  align-content: center;
`;

export const TitleHover = styled.div`
  p:hover {
    cursor: pointer;
    ${transitionHover}
    ${linkHover}
  }
`;
