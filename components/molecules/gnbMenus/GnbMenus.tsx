import React, { useState, useEffect } from "react";
import { GnbMenusStyled, MenuStyled } from "./GnbMenusStyles";
import Span from "@/components/atoms/typography/span/Span";
import { Home, Work } from "@material-ui/icons";

export interface Props {}

const Menu = ({ content }: any) => {
  return (
    <MenuStyled>
      {content.icon}
      <Span fontSize={12}>{content.text}</Span>
    </MenuStyled>
  );
};

const GnbMenus = ({ ...rest }: Props) => {
  const [menuList, setMenuList] = useState<Object[]>([
    { icon: <Home />, text: "Home" },
    { icon: <Work />, text: "Work" },
  ]);

  return (
    <GnbMenusStyled>
      {menuList.map((item) => (
        <Menu content={item} />
      ))}
    </GnbMenusStyled>
  );
};
export default GnbMenus;

export const defaultProps: Props = {};
GnbMenus.defaultProps = {};
