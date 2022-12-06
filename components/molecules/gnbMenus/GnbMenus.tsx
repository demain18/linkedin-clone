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
import { AddCircle, ArrowDropDown } from "@material-ui/icons";
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
    { icon: <AddCircle />, content: "Test1", active: true },
    { icon: <AddCircle />, content: "Test2", active: false },
    { icon: <AddCircle />, content: "Test3", active: false },
    { icon: <AddCircle />, content: "Test4", active: false },
    { icon: <AddCircle />, content: "Test5", active: false },
  ],
};
GnbMenus.defaultProps = {
  menuList: defaultProps.menuList,
};
