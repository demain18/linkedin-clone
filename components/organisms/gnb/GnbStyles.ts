import styled, { css } from "styled-components";
import { Props } from "./Gnb";
import Image from "next/image";

export const GnbStyled = styled.div`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08); ;
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
