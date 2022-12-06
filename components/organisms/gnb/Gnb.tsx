import React, { useState } from "react";
import {
  GnbStyled,
  GnbWrap,
  FlexWrap,
  LogoImageWrap,
  LogoImage,
  InputWrap,
  GnbMenusWrap,
} from "./GnbStyles";
import logoImg from "@/public/images/logo.png";
import Input from "@/components/atoms/forms/field/Input";
import GnbMenus from "@/components/molecules/gnbMenus/GnbMenus";
import {
  Home,
  People,
  Work,
  Chat,
  Notifications,
  ArrowDropDown,
} from "@material-ui/icons";

export interface Props {}

const Gnb = ({ ...rest }: Props) => {
  const [menuList, setMenuList] = useState([
    { icon: <Home />, content: "Home", active: true },
    { icon: <People />, content: "My Network", active: false },
    { icon: <Work />, content: "Jobs", active: false },
    { icon: <Chat />, content: "Messaging", active: false },
    { icon: <Notifications />, content: "Notifications", active: false },
  ]);

  return (
    <GnbStyled>
      <GnbWrap>
        <FlexWrap>
          <LogoImageWrap>
            <LogoImage src={logoImg} layout="fill" objectFit="cover" />
          </LogoImageWrap>

          <InputWrap>
            <Input placeholder="Search" />
          </InputWrap>
        </FlexWrap>

        <GnbMenus menuList={menuList} />
      </GnbWrap>
    </GnbStyled>
  );
};
export default Gnb;

export const defaultProps: Props = {};
Gnb.defaultProps = {};
