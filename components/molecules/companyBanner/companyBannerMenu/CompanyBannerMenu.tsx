import P from "@/components/atoms/typography/p/P";
import React from "react";
import { CompanyBannerMenuStyled } from "./CompanyBannerMenuStyles";

export interface Props {
  children?: JSX.Element | string | number;
  active?: boolean;
}

const CompanyBannerMenu = ({ children, active, ...rest }: Props) => {
  return (
    <CompanyBannerMenuStyled active={active} {...rest}>
      <P>{children}</P>
    </CompanyBannerMenuStyled>
  );
};
export default CompanyBannerMenu;

export const defaultProps: Props = {
  children: "Menu",
};
CompanyBannerMenu.defaultProps = {};
