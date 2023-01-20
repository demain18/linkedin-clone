import JobInfoAbout from "@/components/molecules/jobInfo/jobInfoAbout/JobInfoAbout";
import JobInfoDescription from "@/components/molecules/jobInfo/jobInfoDescription/JobInfoDescription";
import JobInfoHeader from "@/components/molecules/jobInfo/jobInfoHeader/JobInfoHeader";
import JobInfoTags from "@/components/molecules/jobInfo/jobInfoTags/JobInfoTags";
import React from "react";
import { JobInfoStyled } from "./JobInfoStyles";

export interface Props {}

const JobInfo = ({ ...rest }: Props) => {
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
