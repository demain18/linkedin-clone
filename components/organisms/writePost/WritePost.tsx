import React, { useState } from "react";
import {
  AvatarImage,
  AvatarImageWrap,
  WritePostStyled,
  WriteWrap,
  Button,
  ButtonWrap,
} from "./WritePostStyles";
import avatarImg from "@/public/images/avatar.png";
import RoundButton from "@/components/atoms/roundButton/RoundButton";
import HoverButton from "@/components/atoms/hoverButton/HoverButton";
import P from "@/components/atoms/typography/p/P";
import PhotoSizeSelectActual from "@material-ui/icons/PhotoSizeSelectActual";
import Youtube from "@material-ui/icons/YouTube";
import Event from "@material-ui/icons/Event";
import Description from "@material-ui/icons/Description";
import Avatar from "@/components/atoms/avatar/Avatar";

export interface ButtonProps {
  icon: JSX.Element;
  name: string;
}

export interface Props {}

const WritePost = ({ ...rest }: Props) => {
  const [buttonList, setButtonList] = useState<ButtonProps[]>([
    {
      icon: (
        <PhotoSizeSelectActual style={{ fontSize: 20, color: "#378fe9" }} />
      ),
      name: "Photo",
    },
    {
      icon: <Youtube style={{ fontSize: 22, color: "#5f9b41" }} />,
      name: "Youtube",
    },
    {
      icon: <Event style={{ fontSize: 20, color: "#c37d16" }} />,
      name: "Event",
    },
    {
      icon: <Description style={{ fontSize: 20, color: "#e16745" }} />,
      name: "Write Article",
    },
  ]);

  return (
    <WritePostStyled {...rest}>
      <WriteWrap>
        <AvatarImageWrap>
          <Avatar image={avatarImg} size={48} />
        </AvatarImageWrap>
        <RoundButton full alignLeft>
          <P color="grayPoint6" fontSize={14} bold>
            Start a Post
          </P>
        </RoundButton>
      </WriteWrap>
      <ButtonWrap>
        {buttonList.map((button, i) => (
          <HoverButton key={button.name + i}>
            <Button>
              {button.icon}
              <P color="grayPoint6" fontSize={14} bold>
                {button.name}
              </P>
            </Button>
          </HoverButton>
        ))}
      </ButtonWrap>
    </WritePostStyled>
  );
};
export default WritePost;

export const defaultProps: Props = {};
WritePost.defaultProps = {};
