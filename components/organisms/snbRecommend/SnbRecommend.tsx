import P from "@/components/atoms/typography/p/P";
import SnbUser from "@/components/molecules/snb/snbFollowRecommend/SnbUser";
import React, { useState } from "react";
import {
  RecommendsLink,
  RecommendsLinkWrap,
  SnbRecommendStyled,
  UserWrap,
} from "./SnbRecommendStyles";
import ArrowForward from "@material-ui/icons/ArrowForward";
import { palette } from "@/styles/paletteStyles";
import HoverButton from "@/components/atoms/hoverButton/HoverButton";
import { useQuery } from "react-query";
import { getUserList } from "lib/apiRequest";
import { StaticImageData } from "next/image";

export interface Props {}

export interface UserListProps {
  avatarImg: StaticImageData;
  name: string;
  info: string;
}

const SnbRecommend = ({ ...rest }: Props) => {
  const { isLoading, error, data } = useQuery<UserListProps[]>(
    "userList",
    getUserList
  );

  return (
    <SnbRecommendStyled {...rest}>
      <P color="grayPoint9" bold>
        Add to your feed
      </P>
      <UserWrap>
        {data?.map((user) => (
          <SnbUser
            avatarImg={user.avatarImg}
            name={user.name}
            info={user.info}
          />
        ))}
      </UserWrap>
      <RecommendsLinkWrap>
        <HoverButton>
          <RecommendsLink>
            <P color="grayPoint6" fontSize={14} bold>
              View all recommendations
            </P>
            <ArrowForward style={{ fontSize: 16, color: palette.grayPoint6 }} />
          </RecommendsLink>
        </HoverButton>
      </RecommendsLinkWrap>
    </SnbRecommendStyled>
  );
};
export default SnbRecommend;

export const defaultProps: Props = {};
SnbRecommend.defaultProps = {};
