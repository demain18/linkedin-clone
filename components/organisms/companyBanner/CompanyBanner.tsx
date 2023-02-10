import RoundButton from "@/components/atoms/roundButton/RoundButton";
import P from "@/components/atoms/typography/p/P";
import CompanyBannerInfo from "@/components/molecules/companyBanner/companyBannerInfo/CompanyBannerInfo";
import React from "react";
import {
  ButtonContentWrap,
  ButtonWrap,
  CompanyBannerStyled,
  MenuWrap,
} from "./CompanyBannerStyles";
import { Check, Launch } from "@material-ui/icons";
import CompanyBannerMenu from "@/components/molecules/companyBanner/companyBannerMenu/CompanyBannerMenu";

export interface Props {}

const CompanyBanner = ({ ...rest }: Props) => {
  return (
    <CompanyBannerStyled {...rest}>
      <CompanyBannerInfo />
      <ButtonWrap>
        <RoundButton color="primary">
          <ButtonContentWrap>
            <Check style={{ fontSize: 24 }} />
            <P bold>Following</P>
          </ButtonContentWrap>
        </RoundButton>
        <RoundButton color="primary" fill>
          <ButtonContentWrap>
            <P bold>Following</P>
            <Launch style={{ fontSize: 17 }} />
          </ButtonContentWrap>
        </RoundButton>
        <RoundButton>
          <ButtonContentWrap>
            <P color="grayPoint6" bold>
              More
            </P>
          </ButtonContentWrap>
        </RoundButton>
      </ButtonWrap>
      <MenuWrap>
        <CompanyBannerMenu active />
        <CompanyBannerMenu />
        <CompanyBannerMenu />
      </MenuWrap>
    </CompanyBannerStyled>
  );
};
export default CompanyBanner;

export const defaultProps: Props = {};
CompanyBanner.defaultProps = {};
