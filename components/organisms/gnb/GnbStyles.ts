import styled, { css } from "styled-components";
import { Props } from "./Gnb";
import Image from "next/image";

import { layoutWidth, nonSelect } from "@/styles/moduleStyles";
import { transitionHover } from "@/styles/transitionStyles";

export const GnbStyled = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-bottom: 1px solid ${(props) => props.theme.grayPoint1};
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

export const ButtonToggleThemeWrap = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonToggleTheme = styled.div`
  ${nonSelect}
  ${transitionHover}
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.grayPoint1};
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.grayPoint2};
  }
`;
