import P from "@/components/atoms/typography/p/P";
import CompanyJobsRecentButton from "@/components/molecules/companyJobsRecent/companyJobsRecentButton/CompanyJobsRecentButton";
import CompanyJobsRecentCard from "@/components/molecules/companyJobsRecent/companyJobsRecentCard/CompanyJobsRecentCard";
import CompanyJobsRecentFooter from "@/components/molecules/companyJobsRecent/companyJobsRecentFooter/CompanyJobsRecentFooter";
import { getCompanyJobsRecent } from "modules/api/apiRequest";
import { getCompanyJobsRecentDto } from "modules/api/apiRequest.dto";
import { getCompanyName } from "modules/hooks/getCompanyName";
import React from "react";
import { useQuery } from "react-query";
import {
  CarouselMenuWrap,
  CarouselWrap,
  CompanyJobRecentStyled,
  HeaderWrap,
} from "./CompanyJobRecentStyles";

export interface Props {}

const CompanyJobRecent = ({ ...rest }: Props) => {
  const company = getCompanyName();

  const { isLoading, error, data } = useQuery<getCompanyJobsRecentDto[]>(
    ["companyJobsRecent", company],
    () => getCompanyJobsRecent(company)
  );

  return (
    <CompanyJobRecentStyled {...rest}>
      <HeaderWrap>
        <P fontSize={18} color="grayPoint9">
          Recently posted jobs
        </P>
        <CarouselMenuWrap>
          <CompanyJobsRecentButton prev disabled />
          <CompanyJobsRecentButton next />
        </CarouselMenuWrap>
      </HeaderWrap>
      <CarouselWrap>
        {data?.map((i, x) => (
          <CompanyJobsRecentCard
            key={x + "key"}
            logoImg={i.logoImg}
            jobTitle={i.jobTitle}
            companyName={i.companyName}
            companyRegion={i.companyRegion}
            timeAgo={i.timeAgo}
          />
        ))}
      </CarouselWrap>
      <CompanyJobsRecentFooter />
    </CompanyJobRecentStyled>
  );
};
export default CompanyJobRecent;

export const defaultProps: Props = {};
CompanyJobRecent.defaultProps = {};
