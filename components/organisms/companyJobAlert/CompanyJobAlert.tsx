import React from "react";
import { CompanyJobAlertStyled, ContentWrap } from "./CompanyJobAlertStyles";
import { NotificationsNone } from "@material-ui/icons";
import P from "@/components/atoms/typography/p/P";
import RoundButton from "@/components/atoms/roundButton/RoundButton";

export interface Props {}

const CompanyJobAlert = ({ ...rest }: Props) => {
  return (
    <CompanyJobAlertStyled {...rest}>
      <ContentWrap>
        <NotificationsNone style={{ fontSize: 24 }} />
        <div>
          <P color="grayPoint9" bold>
            Create job alert for Toss Bank
          </P>
          <P color="grayPoint9" fontSize={14}>
            Get notified when Toss Bank posts new jobs that match your interest.
          </P>
        </div>
      </ContentWrap>
      <RoundButton>
        <P color="grayPoint6">Create job alert</P>
      </RoundButton>
    </CompanyJobAlertStyled>
  );
};
export default CompanyJobAlert;

export const defaultProps: Props = {};
CompanyJobAlert.defaultProps = {};
