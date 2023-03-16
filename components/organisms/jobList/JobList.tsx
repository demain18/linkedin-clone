import JobListContent from "@/components/molecules/jobList/jobListContent/JobListContent";
import JobListHeader from "@/components/molecules/jobList/jobListHeader/JobListHeader";
import { getJobRecommends } from "modules/api/apiRequest";
import { getJobsRecommendsDto } from "modules/api/apiRequest.dto";
import React from "react";
import { useQuery } from "react-query";
import { JobListStyled } from "./JobListStyles";

export interface Props {}

const JobList = ({ ...rest }: Props) => {
  const { data } = useQuery<getJobsRecommendsDto[]>(
    "jobsRecommends",
    getJobRecommends
  );

  return (
    <JobListStyled {...rest}>
      <JobListHeader />
      {data?.map((i, x) => (
        <JobListContent
          key={i.title! + x}
          active={i.active}
          uid={i.uid}
          employerLogo={i.employerLogo}
          employerCompany={i.employerCompany}
          employerCompanyUid={i.employerCompanyUid}
          title={i.title}
          country={i.country}
          jobForm={i.jobForm}
          actively={i.actively}
          datetime={i.datetime}
          applicants={i.applicants}
        />
      ))}
    </JobListStyled>
  );
};
export default JobList;

export const defaultProps: Props = {};
JobList.defaultProps = {};
