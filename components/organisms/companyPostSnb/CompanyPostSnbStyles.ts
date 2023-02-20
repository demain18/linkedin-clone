import { boxRadius } from "@/styles/moduleStyles";
import styled, { css } from "styled-components";
import { Props } from "./CompanyPostSnb";
import Image from "next/image";

export const CompanyPostSnbStyled = styled.div<Props>`
  position: relative;
  padding: 16px;
  height: 160px;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.grayPoint1};
  ${boxRadius}
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoImgWrap = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
`;

export const LogoImg = styled(Image)``;
