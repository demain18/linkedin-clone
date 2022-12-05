import styled, { css } from "styled-components";
import { Props } from "./Gnb";
import Image from "next/image";

export const GnbStyled = styled.div`
  width: 100%;
  background-color: #fff;
`;

export const GnbWrap = styled.div`
  position: relative;
  max-width: 1128px;
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
  width: 40px;
  height: 40px;
`;

export const LogoImage = styled(Image)``;

export const InputWrap = styled.div`
  max-width: 280px;
`;

export const GnbMenusWrap = styled.div`
  position: absolute;
  right: 0px;
`;
