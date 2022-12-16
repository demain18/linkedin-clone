import { palette } from "@/styles/paletteStyles";
import styled, { css } from "styled-components";
import { Props } from "./SnbRecommend";

export const SnbRecommendStyled = styled.div<Props>`
  width: 312px;
  padding: 12px;
  border-radius: 0.8rem;
  background-color: #fff;
  border: 1px solid ${palette.grayPoint1};
`;

export const UserWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 12px 0px;
  cursor: pointer;
`;

export const RecommendsLink = styled.div`
  padding: 2px 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
