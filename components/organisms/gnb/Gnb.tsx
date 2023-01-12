import React, { useEffect, useState } from "react";
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
import Link from "next/link";
import { useRouter } from "next/router";

export interface Props {}

const Gnb = ({ ...rest }: Props) => {
  const [menuList, setMenuList] = useState([
    { icon: <Home />, content: "Home", href: "/", active: false },
    { icon: <People />, content: "My Network", href: "/people", active: false },
    { icon: <Work />, content: "Jobs", href: "/jobs", active: false },
    { icon: <Chat />, content: "Messaging", href: "/chat", active: false },
    {
      icon: <Notifications />,
      content: "Notifications",
      href: "/noti",
      active: false,
    },
  ]);

  const dispatch = useDispatch();
  const toggleThemeButton = () => dispatch(toggleTheme());

  const themeIsLight = useSelector(
    (state: RootState) => state.global.themeIsLight
  );
  const router = useRouter();

  useEffect(() => {
    const path = router.pathname;
    setMenuList(
      menuList.map((menu) =>
        menu.href === path ? { ...menu, active: true } : menu
      )
    );
    console.log(path);
    console.log(menuList);
  }, []);

  return (
    <GnbStyled>
      <GnbWrap>
        <FlexWrap>
          <Link href="/">
            <LogoImageWrap>
              <LogoImage
                src={logoImg}
                layout="fill"
                objectFit="cover"
                priority
              />
            </LogoImageWrap>
          </Link>

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
            <Link key={item.content} href={item.href}>
              <a>
                <GnbMenu
                  icon={item.icon}
                  content={item.content}
                  active={item.active}
                />
              </a>
            </Link>
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
