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
import JobList from "../jobList/JobList";
import TutorialBox from "@/components/molecules/tutorialBox/TutorialBox";

export interface Props {}

const Gnb = ({ ...rest }: Props) => {
  const [menuList, setMenuList] = useState([
    { icon: <Home />, content: "Home", href: "/", active: false },
    {
      icon: <People />,
      content: "My Network",
      href: "/network",
      active: false,
    },
    { icon: <Work />, content: "Jobs", href: "/jobs?uid=1", active: false },
    { icon: <Chat />, content: "Messaging", href: "/message", active: false },
    {
      icon: <Notifications />,
      content: "Notifications",
      href: "/notification",
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
    let path = window.location.pathname;

    if (path === "/jobs") {
      path = "/jobs?uid=1";
    }

    setMenuList(
      menuList.map((menu) => {
        return menu.href === path ? { ...menu, active: true } : menu;
      })
    );
    console.log(window.location.pathname);
  }, []);

  return (
    <GnbStyled>
      <GnbWrap>
        <TutorialBox
          displayOrder={0}
          top={2}
          left={655}
          width={410}
          desc="이곳에서는 메뉴로 이동할 수 있습니다."
        />
        <TutorialBox
          displayOrder={1}
          top={2}
          left={288}
          width={50}
          desc="이 버튼을 클릭하면 화면 모드를 변경할 수 있습니다."
        />
        <TutorialBox
          displayOrder={2}
          top={215}
          left={315}
          width={150}
          height={25}
          desc="이곳에서는 회사 홈페이지로 이동할 수 있습니다."
        />
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
              {themeIsLight ? "☀️" : "⚫"}
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
