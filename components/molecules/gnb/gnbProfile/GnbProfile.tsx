import React from "react";
import {
  SpanWrap,
  ContentWrap,
  ProfileImage,
  ProfileImageWrap,
} from "./GnbProfileStyles";
import GnbButton from "@/components/molecules/gnb/gnbButton/GnbButton";
import Span from "@/components/atoms/typography/span/Span";
import { ArrowDropDown } from "@material-ui/icons";
import avatarImg from "@/public/images/avatar.png";

export interface Props {}

const GnbProfile = ({ ...rest }: Props) => {
  return (
    <GnbButton {...rest}>
      <ProfileImageWrap>
        <ProfileImage src={avatarImg} layout="fill" objectFit="cover" />
      </ProfileImageWrap>
      <ContentWrap>
        <SpanWrap>
          <Span fontSize={12}>Me</Span>
        </SpanWrap>

        <ArrowDropDown />
      </ContentWrap>
    </GnbButton>
  );
};
export default GnbProfile;

export const defaultProps: Props = {};
GnbProfile.defaultProps = {};
