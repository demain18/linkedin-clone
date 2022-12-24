import { nonSelect } from "@/styles/moduleStyles";
import { palette } from "@/styles/paletteStyles";
import styled, { css } from "styled-components";
import { Props } from "./SnbRecommend";

export const SnbRecommendStyled = styled.div<Props>`
  position: relative;
  max-width: 312px;
  padding: 12px;
  border-radius: 0.8rem;
  background-color: #fff;
  box-sizing: border-box;
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
`;

export const RecommendsLinkWrap = styled.div`
  position: relative;
  margin-bottom: -5px;
  display: inline-block;
  ${nonSelect}
`;
