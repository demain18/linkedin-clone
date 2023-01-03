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
import { getUserList } from "modules/api/apiRequest";
import { getUserListDto } from "modules/api/apiRequest.dto";

export interface Props {}

const SnbRecommend = ({ ...rest }: Props) => {
  const { isLoading, error, data } = useQuery<getUserListDto[]>(
    "userList",
    getUserList
  );

  return (
    <SnbRecommendStyled {...rest}>
      <P color="grayPoint9" bold>
        Add to your feed
      </P>
      <UserWrap>
        {data?.map((user, i) => (
          <SnbUser
            key={user.name + i}
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
