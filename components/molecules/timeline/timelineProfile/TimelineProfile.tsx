import React from "react";
import {
  BadgeWrap,
  ContentWrap,
  TimelineProfileStyled,
  TitleHover,
} from "./TimelineProfileStyles";
import avatarImg from "@/public/images/avatar.png";
import Avatar from "@/components/atoms/avatar/Avatar";
import P from "@/components/atoms/typography/p/P";
import Span from "@/components/atoms/typography/span/Span";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Redirect from "@/components/atoms/redirect/Redirect";

export interface Props {
  avatarImg?: StaticImageData;
  userName?: string;
  companyUid?: string;
  followers?: number;
  datetime?: string;
}

const TimelineProfile = ({
  avatarImg,
  userName,
  companyUid,
  followers,
  datetime,
  ...rest
}: Props) => {
  return (
    <TimelineProfileStyled {...rest}>
      <ContentWrap>
        <Avatar image={avatarImg} size={48} />
        <div>
          <Redirect href={`/company/${companyUid}`}>
            <P fontSize={14} bold>
              {userName}
            </P>
          </Redirect>
          <P color="grayPoint6" fontSize={12}>
            {followers?.toLocaleString() + " followers"}
          </P>
          <BadgeWrap>
            <Span color="grayPoint6" fontSize={12}>
              {datetime + " · Edited"}
            </Span>
          </BadgeWrap>
        </div>
      </ContentWrap>
    </TimelineProfileStyled>
  );
};
export default TimelineProfile;

export const defaultProps: Props = {
  avatarImg: avatarImg,
  userName: "Toss",
  followers: 3500,
  datetime: "8h",
};
TimelineProfile.defaultProps = {};
