import P from "@/components/atoms/typography/p/P";
import React from "react";
import { CompanyBannerMenuStyled } from "./CompanyBannerMenuStyles";

export interface Props {
  content?: string;
  active?: boolean;
}

const CompanyBannerMenu = ({ active, ...rest }: Props) => {
  return (
    <CompanyBannerMenuStyled active={active} {...rest}>
      <P>Menu</P>
    </CompanyBannerMenuStyled>
  );
};
export default CompanyBannerMenu;

export const defaultProps: Props = {
  content: "Menu",
};
CompanyBannerMenu.defaultProps = {};
