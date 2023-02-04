import styled, { css } from "styled-components";
import { Props } from "./SnbPageRecommendContent";

import Image from "next/image";
import { nonSelect } from "@/styles/moduleStyles";

export const SnbPageRecommendContentStyled = styled.div<Props>`
  padding: 16px 0px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

export const PageImgWrap = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
`;

export const PageImg = styled(Image)`
  ${nonSelect}
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RoundButtonWrap = styled.div`
  margin-top: 12px;
`;

export const ButtonContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
