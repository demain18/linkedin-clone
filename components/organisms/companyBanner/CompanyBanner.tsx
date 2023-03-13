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
import { getCompanyName } from "modules/hooks/getCompanyName";

export interface Props {}

export interface MenuListProps {
  name: string;
  link: string;
  active: boolean;
}

const CompanyBanner = ({ ...rest }: Props) => {
  const router = useRouter();
  const [menus, setMenus] = useState<MenuListProps[]>();
  const company = getCompanyName();

  const { data } = useQuery<getCompanyBannerDto>(
    ["companyBanner", company],
    () => getCompanyBanner(company)
  );

  useEffect(() => {
    const { slug } = router.query;

    const list = [
      { name: "About", link: "", active: false },
      { name: "Posts", link: "posts", active: false },
      { name: "Jobs", link: "jobs", active: false },
    ];

    if ((slug?.length || 0) > 1) {
      const subMenu = slug![1];
      setMenus(
        list.map((menu) =>
          menu.name.toLowerCase() === subMenu ? { ...menu, active: true } : menu
        )
      );
    } else {
      setMenus(
        list.map((menu, x) => (x === 0 ? { ...menu, active: true } : menu))
      );
    }
  }, [router.asPath, data]);

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
        {menus?.map((i, x) => {
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

export const defaultProps: Props = {};
CompanyBanner.defaultProps = {};
