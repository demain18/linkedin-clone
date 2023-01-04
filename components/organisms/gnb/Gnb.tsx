import React, { useState } from "react";
import {
  GnbStyled,
  GnbWrap,
  FlexWrap,
  LogoImageWrap,
  LogoImage,
  InputWrap,
  GnbMenusWrap,
  ButtonToggleTheme,
  ButtonToggleThemeWrap,
} from "./GnbStyles";
import logoImg from "@/public/images/logo.png";
import Input from "@/components/atoms/forms/field/Input";
import { Home, People, Work, Chat, Notifications } from "@material-ui/icons";
import GnbMenu from "@/components/molecules/gnb/gnbMenu/GnbMenu";
import GnbProfile from "@/components/molecules/gnb/gnbProfile/GnbProfile";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "modules/store/globalSlice";
import { RootState } from "modules/store";

export interface Props {}

const Gnb = ({ ...rest }: Props) => {
  const [menuList, setMenuList] = useState([
    { icon: <Home />, content: "Home", active: true },
    { icon: <People />, content: "My Network", active: false },
    { icon: <Work />, content: "Jobs", active: false },
    { icon: <Chat />, content: "Messaging", active: false },
    { icon: <Notifications />, content: "Notifications", active: false },
  ]);

  const themeIsLight = useSelector(
    (state: RootState) => state.global.themeIsLight
  );

  const dispatch = useDispatch();
  const toggleThemeButton = () => dispatch(toggleTheme());

  return (
    <GnbStyled>
      <GnbWrap>
        <FlexWrap>
          <LogoImageWrap>
            <LogoImage src={logoImg} layout="fill" objectFit="cover" priority />
          </LogoImageWrap>

          <InputWrap>
            <Input placeholder="Search" />
          </InputWrap>

          <ButtonToggleThemeWrap>
            <ButtonToggleTheme onClick={toggleThemeButton}>
              {themeIsLight ? "🌝" : "🌚"}
            </ButtonToggleTheme>
          </ButtonToggleThemeWrap>
        </FlexWrap>

        <GnbMenusWrap>
          {menuList.map((item) => (
            <GnbMenu
              key={item.content}
              icon={item.icon}
              content={item.content}
              active={item.active}
            />
          ))}
          <GnbProfile />
        </GnbMenusWrap>
      </GnbWrap>
    </GnbStyled>
  );
};
export default Gnb;

export const defaultProps: Props = {};
Gnb.defaultProps = {};
