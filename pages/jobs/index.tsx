import type { NextPage } from "next";
import Gnb from "@/components/organisms/gnb/Gnb";
import { GlobalWrap, JobInfoWrap, JobListWrap } from "@/styles/pages/jobStyles";
import { Frame, FrameWrap } from "@/styles/moduleStyles";
import JobList from "@/components/organisms/jobList/JobList";
import JobInfo from "@/components/organisms/jobInfo/JobInfo";
import { useSelector } from "react-redux";
import { RootState } from "modules/store";

export interface Props {}

const App: NextPage = () => {
  const themeIsLight = useSelector(
    (state: RootState) => state.global.themeIsLight
  );

  return (
    <>
      <Gnb />
      <Frame>
        <FrameWrap>
          <GlobalWrap>
            <JobListWrap>
              <JobList />
            </JobListWrap>

            <JobInfoWrap themeIsLight={themeIsLight}>
              <JobInfo />
            </JobInfoWrap>
          </GlobalWrap>
        </FrameWrap>
      </Frame>
    </>
  );
};

export default App;
