import styled, { css } from "styled-components";
import { Props } from "./CompanyBannerInfo";
import Image from "next/image";

export const CompanyBannerInfoStyled = styled.div<Props>`
  position: relative;
`;

export const BannerImgWrap = styled.div`
  position: relative;
  height: 135px;
`;

export const BannerImg = styled(Image)``;

export const LogoImgWrap = styled.div`
  width: 112px;
  height: 112px;
  position: absolute;
  top: 80px;
  left: 25px;
  border: 2px solid ${(props) => props.theme.white};
`;

export const LogoImg = styled(Image)``;

export const ContentWrap = styled.div`
  padding: 62px 24px 0px 24px;
`;

export const TagWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const WorkWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  margin-top: 16px;
`;

export const CoworkerImgWrap = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  border-radius: 100%;
  overflow: hidden;
`;

export const CoworkerImg = styled(Image)``;
