import RoundButton from "@/components/atoms/roundButton/RoundButton";
import P from "@/components/atoms/typography/p/P";
import CompanyBannerInfo from "@/components/molecules/companyBanner/companyBannerInfo/CompanyBannerInfo";
import React, { useEffect, useState } from "react";
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
import { useRouter } from "next/router";
import Link from "next/link";

export interface Props {}

const CompanyBanner = ({ ...rest }: Props) => {
  const { isLoading, error, data } = useQuery<getCompanyBannerDto>(
    "companyBanner",
    getCompanyBanner
  );

  const [menuList, setMenuList] = useState<any>();

  const router = useRouter();

  useEffect(() => {
    const { slug } = router.query;

    if ((slug?.length || 0) > 1) {
      const newMenuList = data?.menuList?.map((menu) =>
        menu?.name.toLowerCase() === slug![1] ? { ...menu, active: true } : menu
      );

      setMenuList(newMenuList);
    } else {
      const newMenuList = data?.menuList?.map((menu, x) =>
        x === 0 ? { ...menu, active: true } : menu
      );

      setMenuList(newMenuList);
    }
  }, [router.asPath]);

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
        <RoundButton color="primary" fillBtn>
          <ButtonContentWrap>
            <P bold>Visit Website</P>
            <Launch style={{ fontSize: 17 }} />
          </ButtonContentWrap>
        </RoundButton>
        <RoundButton>
          <P color="grayPoint6" bold>
            More
          </P>
        </RoundButton>
      </ButtonWrap>
      <MenuWrap>
        {menuList?.map((i, x) => {
          return (
            <Link
              href={`/company/${data?.companyUid}/` + i.link}
              key={x + "key"}
            >
              <a>
                <CompanyBannerMenu active={i.active}>
                  {i.name}
                </CompanyBannerMenu>
              </a>
            </Link>
          );
        })}
      </MenuWrap>
    </CompanyBannerStyled>
  );
};
export default CompanyBanner;

CompanyBanner.defaultProps = {};
