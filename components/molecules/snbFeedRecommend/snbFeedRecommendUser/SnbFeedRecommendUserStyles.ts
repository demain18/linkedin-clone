import { linkHover, nonSelect } from "@/styles/moduleStyles";

import styled, { css } from "styled-components";
import { Props } from "./SnbFeedRecommendUser";
import Image from "next/image";
import { transitionHover } from "@/styles/transitionStyles";

export const SnbFeedRecommendUserStyled = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  ${nonSelect}
`;

export const ContentWrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const AvatarImageWrap = styled.div`
  position: relative;
  min-width: 48px;
  height: 48px;
`;

export const AvatarImage = styled(Image)`
  ${nonSelect}
  border-radius: 100%;
`;

export const TitleHover = styled.div`
  p:hover {
    cursor: pointer;
    ${transitionHover}
    ${linkHover}
  }
`;

export const Gap = styled.div`
  width: 100%;
  height: 3px;
`;

export const ButtonContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
