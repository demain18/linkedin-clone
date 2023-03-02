import { layoutWidth } from "@/styles/moduleStyles";
import styled from "styled-components";

export const Frame = styled.div`
  background-color: ${(props) => props.theme.background};
  height: calc(100vh - 55px);
`;

export const FrameWrap = styled.div`
  max-width: ${layoutWidth.main}px;
  margin: 0 auto;
  /* border: 1px solid gray; */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  top: 24px;
`;

export const SnbProfileWrap = styled.div`
  min-width: ${layoutWidth.snbProflie}px;
  /* flex-shrink: 0; */
`;

export const TimelineWrap = styled.div`
  width: 100%;
  /* flex-shrink: 5; */
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding-bottom: 24px;
`;

export const SnbRecommendWrap = styled.div`
  min-width: 315px;
  /* flex-shrink: 1; */
`;
