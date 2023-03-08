import { boxRadius } from "@/styles/moduleStyles";
import styled, { css } from "styled-components";
import { Props } from "./Timeline";

export const TimelineWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TimelineStyled = styled.div<Props>`
  /* max-width: 550px; */
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.white};
  ${boxRadius}
  border: 1px solid ${(props) => props.theme.grayPoint1};
  display: flex;
  flex-direction: column;
  /* gap: 5px; */
`;

export const PaddingWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EventsWrap = styled.div`
  padding: 4px 12px;
`;
