import React from "react";
import { CompanyPostSnbStyled } from "./CompanyPostSnbStyles";

import { ContentWrap, LogoImg, LogoImgWrap } from "./CompanyPostSnbStyles";
import logoImg from "@/public/images/dummys/company/toss.png";
import P from "@/components/atoms/typography/p/P";

export interface Props {
  companyName?: string;
  followers?: number;
}

const CompanyPostSnb = ({ companyName, followers, ...rest }: Props) => {
  return (
    <CompanyPostSnbStyled {...rest}>
      <ContentWrap>
        <LogoImgWrap>
          <LogoImg src={logoImg} layout="fill" objectFit="cover" />
        </LogoImgWrap>
        <P color="grayPoint9" bold>
          {companyName}
        </P>
        <P color="grayPoint9" fontSize={14}>
          {`${followers?.toLocaleString()} followers`}
        </P>
      </ContentWrap>
    </CompanyPostSnbStyled>
  );
};
export default CompanyPostSnb;

export const defaultProps: Props = {
  companyName: "Toss Bank",
  followers: 12575,
};
CompanyPostSnb.defaultProps = {};
