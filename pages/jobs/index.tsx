import type { NextPage } from "next";
import Gnb from "@/components/organisms/gnb/Gnb";
import { GlobalWrap, JobInfoWrap, JobListWrap } from "./indexStyles";
import { Frame, FrameWrap } from "@/styles/moduleStyles";
import JobListHeader from "@/components/molecules/jobList/jobListHeader/JobListHeader";
import JobListContent from "@/components/molecules/jobList/jobListContent/JobListContent";
import JobInfoHeader from "@/components/molecules/jobInfo/jobInfoHeader/JobInfoHeader";
import JobInfoTags from "@/components/molecules/jobInfo/jobInfoTags/JobInfoTags";
import JobInfoDescription from "@/components/molecules/jobInfo/jobInfoDescription/JobInfoDescription";
import JobInfoAbout from "@/components/molecules/jobInfo/jobInfoAbout/JobInfoAbout";

export interface Props {}

const App: NextPage = () => {
  return (
    <>
      <Gnb />
      <Frame>
        <FrameWrap>
          <GlobalWrap>
            <JobListWrap>
              <JobListHeader />
              <JobListContent />
            </JobListWrap>
            <JobInfoWrap>
              <JobInfoHeader />
              <JobInfoTags />
              <JobInfoDescription desc="this is description" />
              <JobInfoAbout />
            </JobInfoWrap>
          </GlobalWrap>
        </FrameWrap>
      </Frame>
    </>
  );
};

export default App;
