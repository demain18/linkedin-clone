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
import { useQuery } from "react-query";
import { getCompanyBannerDto } from "modules/api/apiRequest.dto";
import { getCompanyBanner } from "modules/api/apiRequest";
import { getCompanyName } from "modules/hooks/getCompanyName";

export interface Props {}

const CompanyJobAlert = ({ ...rest }: Props) => {
  const company = getCompanyName();

  const { data } = useQuery<getCompanyBannerDto>(
    ["companyBanner", company],
    () => getCompanyBanner(company)
  );

  return (
    <CompanyJobAlertStyled {...rest}>
      <ContentWrap>
        <IconStyled>
          <NotificationsNone style={{ fontSize: 24 }} />
        </IconStyled>
        <div>
          <P color="grayPoint9" bold>
            {`Create job alert for ${data?.name}`}
          </P>
          <P color="grayPoint9" fontSize={14}>
            {`Get notified when ${data?.name} posts new jobs that match
            your interest.`}
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
