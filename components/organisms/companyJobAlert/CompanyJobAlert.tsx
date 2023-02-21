import React from "react";
import {
  ButtonWrap,
  CompanyJobAlertStyled,
  ContentWrap,
  IconStyled,
} from "./CompanyJobAlertStyles";
import { NotificationsNone } from "@material-ui/icons";
import P from "@/components/atoms/typography/p/P";
import RoundButton from "@/components/atoms/roundButton/RoundButton";

export interface Props {}

const CompanyJobAlert = ({ ...rest }: Props) => {
  return (
    <CompanyJobAlertStyled {...rest}>
      <ContentWrap>
        <IconStyled>
          <NotificationsNone style={{ fontSize: 24 }} />
        </IconStyled>
        <div>
          <P color="grayPoint9" bold>
            Create job alert for Viva Republica (Toss)
          </P>
          <P color="grayPoint9" fontSize={14}>
            Get notified when Viva Republica (Toss) posts new jobs that match
            your interest.
          </P>
        </div>
      </ContentWrap>
      <ButtonWrap>
        <RoundButton>
          <P color="grayPoint6">Create job alert</P>
        </RoundButton>
      </ButtonWrap>
    </CompanyJobAlertStyled>
  );
};
export default CompanyJobAlert;

export const defaultProps: Props = {};
CompanyJobAlert.defaultProps = {};
