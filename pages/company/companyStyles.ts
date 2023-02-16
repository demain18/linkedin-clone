import styled, { css } from "styled-components";
import { Props } from "./[...slug]";

export const GlobalWrap = styled.div`
  width: 100%;
  display: flex;
  /* background-color: ${(props) => props.theme.white}; */
  gap: 24px;
  /* padding-bottom: 24px; */
`;

export const MainWrap = styled.div`
  width: 100%;
  /* flex: 80; */
  height: 100%;
`;

export const ContentWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 24px;
`;

export const SnbWrap = styled.div`
  min-width: 320px;
  flex: 20;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
