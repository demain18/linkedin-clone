import RoundButton from "@/components/atoms/roundButton/RoundButton";
import P from "@/components/atoms/typography/p/P";
import JobInfoAbout from "@/components/molecules/jobInfo/jobInfoAbout/JobInfoAbout";
import JobInfoDescription from "@/components/molecules/jobInfo/jobInfoDescription/JobInfoDescription";
import JobInfoHeader from "@/components/molecules/jobInfo/jobInfoHeader/JobInfoHeader";
import JobInfoTags from "@/components/molecules/jobInfo/jobInfoTags/JobInfoTags";
import { ExitToApp } from "@material-ui/icons";
import { getJobsInfo } from "modules/api/apiRequest";
import { getJobsInfoDto } from "modules/api/apiRequest.dto";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ButtonContentWrap, ButtonsWrap, JobInfoStyled } from "./JobInfoStyles";

export interface Props {}

const JobInfo = ({ ...rest }: Props) => {
  const [uid, setUid] = useState<any>();

  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    if (Object.keys(query).length > 0) setUid(query["uid"]);
  }, [query]);

  const { data } = useQuery<getJobsInfoDto>(["jobInfo", uid], () =>
    getJobsInfo(uid)
  );

  return (
    <JobInfoStyled {...rest}>
      <JobInfoHeader
        title={data?.title}
        employerCompany={data?.employerCompany}
        country={data?.country}
        jobForm={data?.jobForm}
        datetime={data?.datetime}
        applicants={data?.applicants}
      />
      <JobInfoTags
        jobForm={data?.jobForm}
        employerCompany={data?.company}
        connects={data?.connects}
        applicants={data?.applicants}
        skills={data?.skills}
      />
      <ButtonsWrap>
        <RoundButton color="primary" fillBtn>
          <ButtonContentWrap>
            <P color="grayPoint6">Apply</P>
            <ExitToApp style={{ fontSize: 15 }} />
          </ButtonContentWrap>
        </RoundButton>
        <RoundButton color="primary">
          <ButtonContentWrap>
            <P color="grayPoint6">Save</P>
          </ButtonContentWrap>
        </RoundButton>
      </ButtonsWrap>
      <JobInfoDescription desc={data?.description} />
      <JobInfoAbout
        companyLogoImg={data?.companyLogo}
        companyName={data?.employerCompany}
        companyDesc={data?.companyDescription}
        followers={data?.followers}
      />
    </JobInfoStyled>
  );
};
export default JobInfo;

export const defaultProps: Props = {};
JobInfo.defaultProps = {};
