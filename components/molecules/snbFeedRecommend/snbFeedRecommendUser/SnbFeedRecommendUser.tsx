import RoundButton from "@/components/atoms/roundButton/RoundButton";
import P from "@/components/atoms/typography/p/P";
import React from "react";
import {
  AvatarImage,
  AvatarImageWrap,
  ButtonContentWrap,
  ContentWrap,
  Gap,
  SnbFeedRecommendUserStyled,
} from "./SnbFeedRecommendUserStyles";
import Add from "@material-ui/icons/Add";
import avatarImg from "@/public/images/avatar.png";
import Avatar from "@/components/atoms/avatar/Avatar";
import { StaticImageData } from "next/image";

export interface Props {
  avatarImg?: StaticImageData;
  name?: string;
  info?: string;
}

const SnbFeedRecommendUser = ({ avatarImg, name, info, ...rest }: Props) => {
  return (
    <SnbFeedRecommendUserStyled {...rest}>
      <ContentWrap>
        <AvatarImageWrap>
          <Avatar image={avatarImg} size={48} />
        </AvatarImageWrap>
        <div>
          <P color="grayPoint9" fontSize={14} bold>
            {name}
          </P>
          <P color="grayPoint6" fontSize={12}>
            {info}
          </P>
          <Gap />
          <RoundButton>
            <ButtonContentWrap>
              <Add style={{ fontSize: 20 }} />
              <P color="grayPoint6">Follow</P>
            </ButtonContentWrap>
          </RoundButton>
        </div>
      </ContentWrap>
    </SnbFeedRecommendUserStyled>
  );
};
export default SnbFeedRecommendUser;

export const defaultProps: Props = {
  avatarImg: avatarImg,
  name: "Test User",
  info: "Test Info",
};
SnbFeedRecommendUser.defaultProps = {};
