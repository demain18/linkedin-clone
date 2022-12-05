import styled, { css } from "styled-components";
import { Props } from "./Gnb";
import Image from "next/image";

export const GnbStyled = styled.div`
  width: 100%;
  background-color: #fff;
`;

export const GnbWrap = styled.div`
  max-width: 1128px;
  display: flex;
`;

export const LogoImageWrap = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`;

export const LogoImage = styled(Image)``;
