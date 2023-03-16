import JobListContent from "@/components/molecules/jobList/jobListContent/JobListContent";
import JobListHeader from "@/components/molecules/jobList/jobListHeader/JobListHeader";
import { getJobRecommends } from "modules/api/apiRequest";
import { getJobsRecommendsDto } from "modules/api/apiRequest.dto";
import { RootState } from "modules/store";
import { useRouter } from "next/router";
import qs from "qs";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { JobListStyled } from "./JobListStyles";

export interface Props {}

const JobList = ({ ...rest }: Props) => {
  const { data } = useQuery<getJobsRecommendsDto[]>(
    "jobsRecommends",
    getJobRecommends
  );
  const [uid, setUid] = useState<any>();
  const router = useRouter();
  const query = router.query;
  const themeIsLight = useSelector(
    (state: RootState) => state.global.themeIsLight
  );

  useEffect(() => {
    if (Object.keys(query).length > 0) setUid(query["uid"]);
  }, [query]);

  return (
    <JobListStyled themeIsLight={themeIsLight} {...rest}>
      <JobListHeader />
      {data?.map((i, x) => (
        <JobListContent
          key={i.title! + x}
          active={i.uid === +uid}
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

JobList.defaultProps = {};
