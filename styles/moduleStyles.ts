import styled, { css } from "styled-components";

export const layoutWidth = {
  snbProflie: 225,
  main: 1128,
};

export const nonSelect = css`
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

export const linkHover = css`
  color: ${(props) => props.theme.primary};
  text-decoration: underline;
`;

export const Frame = styled.div`
  background-color: ${(props) => props.theme.background};
  height: calc(100vh - 55px);
  /* height: 100%; */
`;

export const FrameWrap = styled.div`
  max-width: ${layoutWidth.main}px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  top: 24px;
`;
