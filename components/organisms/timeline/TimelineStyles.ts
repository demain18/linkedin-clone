import { palette } from "@/styles/paletteStyles";
import styled, { css } from "styled-components";
import { Props } from "./Timeline";

export const TimelineStyled = styled.div<Props>`
  max-width: 550px;
  height: 100%;
  background-color: ${palette.white};
  border-radius: 0.8rem;
  border: 1px solid ${palette.grayPoint1};
  display: flex;
  flex-direction: column;
  /* gap: 5px; */
`;

export const TimelinePaddingWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 16px 10px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TimelineEventsWrap = styled.div`
  padding: 4px 12px;
`;
