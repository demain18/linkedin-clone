import RoundButton from "@/components/atoms/roundButton/RoundButton";
import P from "@/components/atoms/typography/p/P";
import React from "react";
import {
  AvatarImage,
  AvatarImageWrap,
  ButtonContentWrap,
  ContentWrap,
  SnbUserStyled,
} from "./SnbUserStyles";
import Add from "@material-ui/icons/Add";
import avatarImg from "@/public/images/avatar.png";

export interface Props {
  name?: string;
  info?: string;
}

const SnbUser = ({ name, info, ...rest }: Props) => {
  return (
    <SnbUserStyled {...rest}>
      <ContentWrap>
        <AvatarImageWrap>
          <AvatarImage src={avatarImg} layout="fill" objectFit="cover" />
        </AvatarImageWrap>
        <div>
          <P color="grayPoint9" fontSize={14} bold>
            {name}
          </P>
          <P color="grayPoint6" fontSize={12}>
            {info}
          </P>
          <RoundButton>
            <ButtonContentWrap>
              <Add style={{ fontSize: 20 }} />
              <P color="grayPoint6">Follow</P>
            </ButtonContentWrap>
          </RoundButton>
        </div>
      </ContentWrap>
    </SnbUserStyled>
  );
};
export default SnbUser;

export const defaultProps: Props = {
  name: "Test User",
  info: "Test Info",
};
SnbUser.defaultProps = {};
