import React from "react";
import { CompanyPostSnbStyled } from "./CompanyPostSnbStyles";

import { ContentWrap, LogoImg, LogoImgWrap } from "./CompanyPostSnbStyles";
import P from "@/components/atoms/typography/p/P";
import { useQuery } from "react-query";
import { getCompanyBannerDto } from "modules/api/apiRequest.dto";
import { getCompanyBanner } from "modules/api/apiRequest";
import { getCompanyName } from "modules/hooks/getCompanyName";
import avatarImg from "@/public/images/avatar.png";

export interface Props {}

const CompanyPostSnb = ({ ...rest }: Props) => {
  const company = getCompanyName();

  const { data } = useQuery<getCompanyBannerDto>(
    ["companyBanner", company],
    () => getCompanyBanner(company)
  );

  return (
    <CompanyPostSnbStyled {...rest}>
      <ContentWrap>
        <LogoImgWrap>
          <LogoImg
            src={data?.logoImg! || avatarImg}
            layout="fill"
            objectFit="cover"
          />
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
