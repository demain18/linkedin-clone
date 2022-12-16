import React from "react";
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

export interface Props {}

const WritePost = ({ ...rest }: Props) => {
  return (
    <WritePostStyled {...rest}>
      <WriteWrap>
        <AvatarImageWrap>
          <AvatarImage src={avatarImg} layout="fill" objectFit="cover" />
        </AvatarImageWrap>
        <RoundButton full alignLeft>
          <P color="grayPoint6" fontSize={14} bold>
            Start a Post
          </P>
        </RoundButton>
      </WriteWrap>
      <ButtonWrap>
        <HoverButton>
          <Button>
            <PhotoSizeSelectActual style={{ fontSize: 20, color: "#378fe9" }} />
            <P color="grayPoint6" fontSize={14} bold>
              Photo
            </P>
          </Button>
        </HoverButton>
        <HoverButton>
          <Button>
            <Youtube style={{ fontSize: 22, color: "#5f9b41" }} />
            <P color="grayPoint6" fontSize={14} bold>
              Video
            </P>
          </Button>
        </HoverButton>
        <HoverButton>
          <Button>
            <Event style={{ fontSize: 20, color: "#c37d16" }} />
            <P color="grayPoint6" fontSize={14} bold>
              Event
            </P>
          </Button>
        </HoverButton>
        <HoverButton>
          <Button>
            <Description style={{ fontSize: 20, color: "#e16745" }} />
            <P color="grayPoint6" fontSize={14} bold>
              Write Article
            </P>
          </Button>
        </HoverButton>
      </ButtonWrap>
    </WritePostStyled>
  );
};
export default WritePost;

export const defaultProps: Props = {};
WritePost.defaultProps = {};
