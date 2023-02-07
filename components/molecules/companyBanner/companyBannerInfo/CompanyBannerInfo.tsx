import React from "react";
import {
  BannerImg,
  BannerImgWrap,
  CompanyBannerInfoStyled,
  ContentWrap,
  CoworkerImg,
  CoworkerImgWrap,
  LogoImg,
  LogoImgWrap,
  TagWrap,
  WorkWrap,
} from "./CompanyBannerInfoStyles";
import tossBannerimg from "public/images/dummys/company/toss_banner.png";
import tossLogoimg from "public/images/dummys/company/toss.png";
import exBannerImg from "public/images/banner.png";
import exLogoImg from "public/images/avatar.png";
import P from "@/components/atoms/typography/p/P";
import Span from "@/components/atoms/typography/span/Span";

export interface Props {}

const CompanyBannerInfo = ({ ...rest }: Props) => {
  return (
    <CompanyBannerInfoStyled {...rest}>
      <BannerImgWrap>
        <BannerImg src={tossBannerimg} layout="fill" objectFit="cover" />
      </BannerImgWrap>
      <LogoImgWrap>
        <LogoImg src={tossLogoimg} layout="fill" objectFit="cover" />
      </LogoImgWrap>
      <ContentWrap>
        <P fontSize={24} bold>
          Viva Republica (Toss)
        </P>
        <TagWrap>
          <Span fontSize={14} color="grayPoint6">
            Financial Services
          </Span>
          <Span fontSize={14} color="grayPoint6">
            ·
          </Span>
          <Span fontSize={14} color="grayPoint6">
            Seoul, Seoul
          </Span>
          <Span fontSize={14} color="grayPoint6">
            ·
          </Span>
          <Span fontSize={14} color="grayPoint6">
            48,923 followers
          </Span>
        </TagWrap>
        <WorkWrap>
          <CoworkerImgWrap>
            <CoworkerImg src={exLogoImg} layout="fill" objectFit="cover" />
          </CoworkerImgWrap>
          <Span fontSize={16} color="grayPoint6">
            Brain work at here
          </Span>
          <Span fontSize={14} color="grayPoint6">
            ·
          </Span>
          <Span fontSize={16} color="grayPoint6">
            1,332 employees
          </Span>
        </WorkWrap>
      </ContentWrap>
    </CompanyBannerInfoStyled>
  );
};
export default CompanyBannerInfo;

export const defaultProps: Props = {};
CompanyBannerInfo.defaultProps = {};
