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
import { useQuery } from "react-query";
import { getCompanyBannerDto } from "modules/api/apiRequest.dto";
import { getCompanyBanner } from "modules/api/apiRequest";

export interface Props {}

const CompanyBanner = ({ ...rest }: Props) => {
  const { isLoading, error, data } = useQuery<getCompanyBannerDto>(
    "companyBanner",
    getCompanyBanner
  );

  return (
    <CompanyBannerStyled {...rest}>
      <CompanyBannerInfo
        bannerImg={data?.bannerImg}
        logoImg={data?.logoImg}
        name={data?.name}
        category={data?.category}
        region={data?.region}
        followers={data?.followers}
        coworkerName={data?.coworkerName}
        emplyeesNum={data?.emplyeesNum}
      />
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
        {data?.menuList?.map((i, x) => {
          return (
            <CompanyBannerMenu key={x + "key"} active={i.active}>
              {i.name}
            </CompanyBannerMenu>
          );
        })}
      </MenuWrap>
    </CompanyBannerStyled>
  );
};
export default CompanyBanner;

export const defaultProps: Props = {};
CompanyBanner.defaultProps = {};
