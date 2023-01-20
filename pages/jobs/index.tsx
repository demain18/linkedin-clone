import type { NextPage } from "next";
import Gnb from "@/components/organisms/gnb/Gnb";
import { GlobalWrap, JobInfoWrap, JobListWrap } from "./indexStyles";
import { Frame, FrameWrap } from "@/styles/moduleStyles";
import JobList from "@/components/organisms/jobList/JobList";
import JobInfo from "@/components/organisms/jobInfo/JobInfo";

export interface Props {}

const App: NextPage = () => {
  return (
    <>
      <Gnb />
      <Frame>
        <FrameWrap>
          <GlobalWrap>
            <JobListWrap>
              <JobList />
            </JobListWrap>
            <JobInfoWrap>
              <JobInfo />
            </JobInfoWrap>
          </GlobalWrap>
        </FrameWrap>
      </Frame>
    </>
  );
};

export default App;
