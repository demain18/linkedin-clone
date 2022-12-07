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
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

export const DividerBottomGap = styled.div`
  width: 100%;
  height: 12px;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

export const DividerTopGap = styled.div`
  width: 100%;
  height: 12px;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
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
