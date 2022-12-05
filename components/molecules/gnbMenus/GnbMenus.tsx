import React from "react";
import {
  GnbMenusStyled,
  MenuStyled,
  ProfileImageWrap,
  ProfileImage,
  ProfileContentWrap,
  ProfileContentSpanWrap,
} from "./GnbMenusStyles";
import Span from "@/components/atoms/typography/span/Span";
import {
  Home,
  People,
  Work,
  Chat,
  Notifications,
  ArrowDropDown,
} from "@material-ui/icons";
import avatarImg from "@/public/images/avatar.png";

export interface MenuProps {
  icon?: JSX.Element;
  content?: string;
  active?: boolean;
}

export interface Props {
  menuList: MenuProps[];
}

const Menu = ({ icon, content, active }: MenuProps) => {
  return (
    <MenuStyled active={active}>
      {icon}
      <Span fontSize={12}>{content}</Span>
    </MenuStyled>
  );
};

const Profile = () => {
  return (
    <MenuStyled>
      <ProfileImageWrap>
        <ProfileImage src={avatarImg} layout="fill" objectFit="cover" />
      </ProfileImageWrap>
      <ProfileContentWrap>
        <ProfileContentSpanWrap>
          <Span fontSize={12}>Me</Span>
        </ProfileContentSpanWrap>

        <ArrowDropDown />
      </ProfileContentWrap>
    </MenuStyled>
  );
};

const GnbMenus = ({ menuList, ...rest }: Props) => {
  return (
    <GnbMenusStyled>
      {menuList.map((item) => (
        <Menu icon={item.icon} content={item.content} active={item.active} />
      ))}
      <Profile />
    </GnbMenusStyled>
  );
};
export default GnbMenus;

export const defaultProps: Props = {
  menuList: [
    { icon: <Home />, content: "Home", active: true },
    { icon: <People />, content: "My Network", active: false },
    { icon: <Work />, content: "Jobs", active: false },
    { icon: <Chat />, content: "Messaging", active: false },
    { icon: <Notifications />, content: "Notifications", active: false },
  ],
};
GnbMenus.defaultProps = {};
