import React from "react";
import {
  BadgeWrap,
  ContentWrap,
  Dot,
  TimelineProfileStyled,
} from "./TimelineProfileStyles";
import avatarImg from "@/public/images/avatar.png";
import Avatar from "@/components/atoms/avatar/Avatar";
import P from "@/components/atoms/typography/p/P";
import Span from "@/components/atoms/typography/span/Span";
import { StaticImageData } from "next/image";

export interface Props {
  avatarImg?: StaticImageData;
  userName?: string;
  followers?: number;
  datetime?: string;
}

const TimelineProfile = ({
  avatarImg,
  userName,
  followers,
  datetime,
  ...rest
}: Props) => {
  return (
    <TimelineProfileStyled {...rest}>
      <ContentWrap>
        <Avatar image={avatarImg} size={48} />
        <div>
          <P color="grayPoint9" fontSize={14} bold>
            Toss Payment
          </P>
          <P color="grayPoint6" fontSize={12}>
            6,350 followers
          </P>
          <BadgeWrap>
            <Span color="grayPoint6" fontSize={12}>
              20h
            </Span>
            <Dot />
            <Span color="grayPoint6" fontSize={12}>
              Edited
            </Span>
          </BadgeWrap>
        </div>
      </ContentWrap>
    </TimelineProfileStyled>
  );
};
export default TimelineProfile;

export const defaultProps: Props = { avatarImg: avatarImg };
TimelineProfile.defaultProps = {};
