import Redirect from "@/components/atoms/redirect/Redirect";
import P from "@/components/atoms/typography/p/P";
import { getCompanyOverview } from "modules/api/apiRequest";
import { getCompanyOverviewDto } from "modules/api/apiRequest.dto";
import { getCompanyName } from "modules/hooks/getCompanyName";
import React from "react";
import { useQuery } from "react-query";
import { CompanyOverviewStyled, ContentWrap } from "./CompanyOverviewStyles";

export interface Props {}

const CompanyOverview = ({ ...rest }: Props) => {
  const company = getCompanyName();
  const { data } = useQuery<getCompanyOverviewDto>(
    ["companyOverview", company],
    () => getCompanyOverview(company)
  );

  return (
    <CompanyOverviewStyled {...rest}>
      <P fontSize={20} bold>
        Overview
      </P>
      {data?.overview?.split("\n").map((i, x) => (
        <P fontSize={14} color="grayPoint6" key={x + "key"}>
          {i}
        </P>
      ))}
      <ContentWrap>
        <P fontSize={14} bold>
          Website
        </P>
        <Redirect href={data?.website || ""} outpage>
          <P fontSize={14} color="primary">
            {data?.website}
          </P>
        </Redirect>
      </ContentWrap>{" "}
      <ContentWrap>
        <P fontSize={14} bold>
          Industry
        </P>
        <P fontSize={14} color="grayPoint6">
          {data?.industry}
        </P>
      </ContentWrap>{" "}
      <ContentWrap>
        <P fontSize={14} bold>
          Company size
        </P>
        <P fontSize={14} color="grayPoint6">
          {`${data?.companyEmployees} employees`}
        </P>
        <P fontSize={14} color="grayPoint6">
          {`${data?.companyEmployeesLinkedin?.toLocaleString()} on LinkedIn`}
        </P>
      </ContentWrap>
      <ContentWrap>
        <P fontSize={14} bold>
          Headquarters
        </P>
        <P fontSize={14} color="grayPoint6">
          {data?.headquarter}
        </P>
      </ContentWrap>
      {data?.founded && (
        <ContentWrap>
          <P fontSize={14} bold>
            Founded
          </P>
          <P fontSize={14} color="grayPoint6">
            {data?.founded}
          </P>
        </ContentWrap>
      )}
      {data?.specialties && (
        <ContentWrap>
          <P fontSize={14} bold>
            Specialties
          </P>
          <P fontSize={14} color="grayPoint6">
            {data?.specialties}
          </P>
        </ContentWrap>
      )}
    </CompanyOverviewStyled>
  );
};
export default CompanyOverview;

export const defaultProps: Props = {};
CompanyOverview.defaultProps = {};
