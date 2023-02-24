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
import { StaticImageData } from "next/image";

export interface Props {
  bannerImg?: StaticImageData;
  logoImg?: StaticImageData;
  name?: string;
  category?: string;
  region?: string;
  followers?: number;
  coworkerName?: string;
  emplyeesNum?: number;
}

const CompanyBannerInfo = ({
  bannerImg,
  logoImg,
  name,
  category,
  region,
  followers,
  coworkerName,
  emplyeesNum,
  ...rest
}: Props) => {
  return (
    <CompanyBannerInfoStyled {...rest}>
      <BannerImgWrap>
        <BannerImg src={bannerImg!} layout="fill" objectFit="cover" />
      </BannerImgWrap>
      <LogoImgWrap>
        <LogoImg src={logoImg!} layout="fill" objectFit="cover" />
      </LogoImgWrap>
      <ContentWrap>
        <P fontSize={24} bold>
          {name}
        </P>
        <TagWrap>
          <Span fontSize={14} color="grayPoint6">
            {category}
          </Span>
          <Span fontSize={14} color="grayPoint6">
            ·
          </Span>
          <Span fontSize={14} color="grayPoint6">
            {region}
          </Span>
          <Span fontSize={14} color="grayPoint6">
            ·
          </Span>
          <Span fontSize={14} color="grayPoint6">
            {`${followers?.toLocaleString()} followers`}
          </Span>
        </TagWrap>
        <WorkWrap>
          {coworkerName && (
            <>
              <CoworkerImgWrap>
                <CoworkerImg src={exLogoImg} layout="fill" objectFit="cover" />
              </CoworkerImgWrap>
              <Span fontSize={16} color="grayPoint6">
                {`${coworkerName} work at here`}
              </Span>
              <Span fontSize={14} color="grayPoint6">
                ·
              </Span>
            </>
          )}

          <Span fontSize={16} color="grayPoint6">
            {`${emplyeesNum?.toLocaleString()} emplyees`}
          </Span>
        </WorkWrap>
      </ContentWrap>
    </CompanyBannerInfoStyled>
  );
};
export default CompanyBannerInfo;

export const defaultProps: Props = {
  bannerImg: tossBannerimg,
  logoImg: tossLogoimg,
  name: "Viva Republica (Toss)",
  category: "Financial Services",
  region: "Seoul, Seoul",
  followers: 43332,
  coworkerName: "Brain",
  emplyeesNum: 1182,
};
CompanyBannerInfo.defaultProps = {
  bannerImg: exBannerImg,
  logoImg: exLogoImg,
};
