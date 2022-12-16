import { layoutWidth } from "@/styles/moduleStyles";
import { palette } from "@/styles/paletteStyles";
import styled, { css } from "styled-components";
import { Props } from "./SnbProfile";
import Image from "next/image";

export const SnbProfileStyled = styled.div<Props>`
  max-width: ${layoutWidth.snbProflie}px;
  border-radius: 0.8rem;
  overflow: hidden;
  position: relative;
  border: 1px solid ${palette.grayPoint1};
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${palette.grayPoint1};
`;

export const DividerBottomGap = styled.div`
  width: 100%;
  height: 12px;
  background-color: #fff;
  border-top: 1px solid ${palette.grayPoint1};
  box-sizing: border-box;
`;

export const DividerTopGap = styled.div`
  width: 100%;
  height: 12px;
  background-color: #fff;
  border-bottom: 1px solid ${palette.grayPoint1};
`;

export const ButtonContentFlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PremiumWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  p {
    text-decoration: underline;
  }

  p:hover {
    color: ${palette.primary};
  }
`;

export const PremiumBadgeImageWrap = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
`;

export const PremiumBadgeImage = styled(Image)``;

export const MyitemContentWrap = styled.div`
  display: flex;
  gap: 7px;
  padding: 6px 0px;
  align-items: center;
`;

export const BookmarkWrap = styled.div`
  position: relative;
  top: 2px;
  color: ${palette.grayPoint6};
`;
