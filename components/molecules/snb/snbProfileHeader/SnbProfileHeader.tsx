import React from "react";
import {
  SnbProfileHeaderStyled,
  BannerImageWrap,
  BannerImage,
  AvatarImageWrap,
  AvatarImage,
  PWrap,
  PLinkWrak,
} from "./SnbProfileHeaderStyles";
import bannerImg from "@/public/images/banner.png";
import avatarImg from "@/public/images/avatar.png";
import { StaticImageData } from "next/image";
import P from "@/components/atoms/typography/p/P";
import Avatar from "@/components/atoms/avatar/Avatar";

export interface Props {
  bannerImg: StaticImageData;
  avatarImg: StaticImageData;
  title: string;
  desc: string;
}

const SnbProfileHeader = ({
  bannerImg,
  avatarImg,
  title,
  desc,
  ...rest
}: Props) => {
  return (
    <SnbProfileHeaderStyled {...rest}>
      <BannerImageWrap>
        <BannerImage src={bannerImg} layout="fill" objectFit="cover" />
      </BannerImageWrap>

      <AvatarImageWrap>
        <Avatar image={avatarImg} size={72} />
      </AvatarImageWrap>

      <PLinkWrak>
        <P>{title}</P>
      </PLinkWrak>
      <PWrap>
        <P fontSize={12} color="grayPoint6">
          {desc}
        </P>
      </PWrap>
    </SnbProfileHeaderStyled>
  );
};
export default SnbProfileHeader;

export const defaultProps: Props = {
  bannerImg: bannerImg,
  avatarImg: avatarImg,
  title: "Test User",
  desc: "Test Description",
};
SnbProfileHeader.defaultProps = {
  bannerImg: defaultProps.bannerImg,
  avatarImg: defaultProps.avatarImg,
  title: defaultProps.title,
  desc: defaultProps.desc,
};
