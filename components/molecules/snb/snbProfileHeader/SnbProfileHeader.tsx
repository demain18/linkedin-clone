import React from "react";
import {
  SnbProfileHeaderStyled,
  BannerImageWrap,
  BannerImage,
  AvatarImageWrap,
  AvatarImage,
} from "./SnbProfileHeaderStyles";
import bannerImg from "@/public/images/banner.png";
import avatarImg from "@/public/images/avatar.png";
import { StaticImageData } from "next/image";

export interface Props {
  bannerImg: StaticImageData;
  avatarImg: StaticImageData;
  title: string;
  desc: string;
}

const SnbProfileHeader = ({ ...rest }: Props) => {
  return (
    <SnbProfileHeaderStyled {...rest}>
      <BannerImageWrap>
        <BannerImage src={bannerImg} layout="fill" objectFit="cover" />
      </BannerImageWrap>

      <AvatarImageWrap>
        <AvatarImage src={avatarImg} layout="fill" objectFit="cover" />
      </AvatarImageWrap>
    </SnbProfileHeaderStyled>
  );
};
export default SnbProfileHeader;

export const defaultProps: Props = {
  bannerImg: bannerImg,
  avatarImg: avatarImg,
  title: "Test Title",
  desc: "Test Description",
};
SnbProfileHeader.defaultProps = {};
