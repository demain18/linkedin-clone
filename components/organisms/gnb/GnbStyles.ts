import styled, { css } from "styled-components";
import { Props } from "./Gnb";
import Image from "next/image";
import { palette } from "@/styles/paletteStyles";
import { layoutWidth } from "@/styles/moduleStyles";

export const GnbStyled = styled.div`
  width: 100%;
  background-color: ${palette.white};
  border-bottom: 1px solid ${palette.grayPoint1};
`;

export const GnbWrap = styled.div`
  position: relative;
  max-width: ${layoutWidth.main}px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  /* border: 1px solid blue; */
`;

export const FlexWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImageWrap = styled.div`
  position: relative;
  width: 34px;
  height: 34px;
  margin: 0px 7px;
`;

export const LogoImage = styled(Image)``;

export const InputWrap = styled.div`
  min-width: 240px;
`;

export const GnbMenusWrap = styled.div`
  display: flex;
`;
