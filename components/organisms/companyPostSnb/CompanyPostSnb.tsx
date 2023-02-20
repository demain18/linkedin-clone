import React from "react";
import { CompanyPostSnbStyled } from "./CompanyPostSnbStyles";

import { ContentWrap, LogoImg, LogoImgWrap } from "./CompanyPostSnbStyles";
import logoImg from "@/public/images/dummys/company/toss.png";
import P from "@/components/atoms/typography/p/P";
import { useQuery } from "react-query";
import { getCompanyBannerDto } from "modules/api/apiRequest.dto";
import { getCompanyBanner } from "modules/api/apiRequest";

export interface Props {}

const CompanyPostSnb = ({ ...rest }: Props) => {
  const { isLoading, error, data } = useQuery<getCompanyBannerDto>(
    "companyBanner",
    getCompanyBanner
  );

  return (
    <CompanyPostSnbStyled {...rest}>
      <ContentWrap>
        <LogoImgWrap>
          <LogoImg src={logoImg} layout="fill" objectFit="cover" />
        </LogoImgWrap>
        <P color="grayPoint9" bold>
          {data?.name}
        </P>
        <P color="grayPoint9" fontSize={14}>
          {`${data?.followers?.toLocaleString()} followers`}
        </P>
      </ContentWrap>
    </CompanyPostSnbStyled>
  );
};
export default CompanyPostSnb;

export const defaultProps: Props = {};
CompanyPostSnb.defaultProps = {};
