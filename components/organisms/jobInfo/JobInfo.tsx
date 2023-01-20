import JobInfoAbout from "@/components/molecules/jobInfo/jobInfoAbout/JobInfoAbout";
import JobInfoDescription from "@/components/molecules/jobInfo/jobInfoDescription/JobInfoDescription";
import JobInfoHeader from "@/components/molecules/jobInfo/jobInfoHeader/JobInfoHeader";
import JobInfoTags from "@/components/molecules/jobInfo/jobInfoTags/JobInfoTags";
import { getJobsInfo } from "modules/api/apiRequest";
import { getJobsInfoDto } from "modules/api/apiRequest.dto";
import React from "react";
import { useQuery } from "react-query";
import { JobInfoStyled } from "./JobInfoStyles";

export interface Props {}

const JobInfo = ({ ...rest }: Props) => {
  const uid: number = 0;

  const { isLoading, error, data } = useQuery<getJobsInfoDto>(
    ["timelinePost", uid],
    () => getJobsInfo(uid)
  );

  console.log(data);

  return (
    <JobInfoStyled {...rest}>
      <JobInfoHeader />
      <JobInfoTags />
      <JobInfoDescription desc="this is description" />
      <JobInfoAbout />
    </JobInfoStyled>
  );
};
export default JobInfo;

export const defaultProps: Props = {};
JobInfo.defaultProps = {};
