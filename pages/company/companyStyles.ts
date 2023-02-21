import styled, { css } from "styled-components";
import { Props } from "./[...slug]";

export const GlobalWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
`;

export const MainWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const SnbWrap = styled.div`
  flex-basis: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CompanyWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 24px;
`;

export const PostsWrap = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  padding-bottom: 24px;
`;

export const PostSnbWrap = styled.div`
  min-width: 215px;
`;

export const PostContentWrap = styled.div`
  width: 100%;
  height: 100%;
`;
