import { boxRadius, nonSelect } from "@/styles/moduleStyles";

import styled, { css } from "styled-components";
import { Props } from "./SnbFeedRecommend";

export const SnbRecommendStyled = styled.div<Props>`
  position: relative;
  /* max-width: 312px; */
  width: 100%;
  padding: 12px;
  ${boxRadius}
  background-color: ${(props) => props.theme.white};
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.grayPoint1};
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

  svg {
    color: ${(props) => props.theme.grayPoint8};
  }
`;

export const RecommendsLinkWrap = styled.div`
  position: relative;
  margin-bottom: -5px;
  display: inline-block;
  ${nonSelect}
`;
