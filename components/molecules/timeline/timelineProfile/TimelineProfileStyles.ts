import { palette } from "@/styles/paletteStyles";
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
export const Dot = styled.div`
  position: relative;
  width: 2px;
  height: 2px;
  border-radius: 100%;
  background-color: ${palette.grayPoint6};
  margin: 6px 5px 0px 5px;
`;
