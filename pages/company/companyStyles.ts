import styled, { css } from "styled-components";
import { Props } from "./[slug]";

export const GlobalWrap = styled.div`
  display: flex;
  /* background-color: ${(props) => props.theme.white}; */
  gap: 24px;
  /* padding-bottom: 24px; */
`;

export const MainWrap = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 24px;
`;

export const SnbWrap = styled.div`
  min-width: 320px;
  height: 100%;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
