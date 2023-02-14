import P from "@/components/atoms/typography/p/P";
import { getCompanyOverview } from "modules/api/apiRequest";
import { getCompanyOverviewDto } from "modules/api/apiRequest.dto";
import React from "react";
import { useQuery } from "react-query";
import { CompanyOverviewStyled, ContentWrap } from "./CompanyOverviewStyles";

export interface Props {}

const CompanyOverview = ({ ...rest }: Props) => {
  const { isLoading, error, data } = useQuery<getCompanyOverviewDto>(
    "companyOverview",
    getCompanyOverview
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
        <P fontSize={14} color="grayPoint6">
          {data?.website}
        </P>
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
    </CompanyOverviewStyled>
  );
};
export default CompanyOverview;

export const defaultProps: Props = {};
CompanyOverview.defaultProps = {};
