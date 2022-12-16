import P from "@/components/atoms/typography/p/P";
import SnbUser from "@/components/molecules/snb/snbFollowRecommend/SnbUser";
import React, { useState } from "react";
import {
  RecommendsLink,
  SnbRecommendStyled,
  UserWrap,
} from "./SnbRecommendStyles";
import ArrowForward from "@material-ui/icons/ArrowForward";
import { palette } from "@/styles/paletteStyles";

export interface Props {}

const SnbRecommend = ({ ...rest }: Props) => {
  const [userList, setUserList] = useState([
    { name: "Brian", info: "this is info" },
    { name: "Dawnleaf", info: "this is dawnleaf" },
  ]);

  return (
    <SnbRecommendStyled {...rest}>
      <P color="grayPoint9" bold>
        Add to your feed
      </P>
      <UserWrap>
        {userList.map((user) => (
          <SnbUser name={user.name} info={user.info} />
        ))}
      </UserWrap>
      <RecommendsLink>
        <P color="grayPoint6" fontSize={14} bold>
          View all recommendations
        </P>
        <ArrowForward style={{ fontSize: 16, color: palette.grayPoint6 }} />
      </RecommendsLink>
    </SnbRecommendStyled>
  );
};
export default SnbRecommend;

export const defaultProps: Props = {};
SnbRecommend.defaultProps = {};
