import RoundButton from "@/components/atoms/roundButton/RoundButton";
import P from "@/components/atoms/typography/p/P";
import React from "react";
import { ContentWrap, SnbUserStyled } from "./SnbUserStyles";
import Add from "@material-ui/icons/Add";

export interface Props {}

const SnbUser = ({ ...rest }: Props) => {
  return (
    <SnbUserStyled {...rest}>
      <RoundButton>
        <ContentWrap>
          <Add style={{ fontSize: 20 }} />
          <P color="grayPoint6">Follow</P>
        </ContentWrap>
      </RoundButton>
    </SnbUserStyled>
  );
};
export default SnbUser;

export const defaultProps: Props = {};
SnbUser.defaultProps = {};
