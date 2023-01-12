import type { NextPage } from "next";
import SnbProfile from "@/components/organisms/snbProfile/SnbProfile";
import Gnb from "@/components/organisms/gnb/Gnb";
import { SnbProfileWrap, SnbRecommendWrap, TimelineWrap } from "./indexStyles";
import SnbRecommend from "@/components/organisms/snbRecommend/SnbRecommend";
import Timeline from "@/components/organisms/timeline/Timeline";
import WritePost from "@/components/organisms/writePost/WritePost";
import { Frame, FrameWrap } from "@/styles/moduleStyles";

export interface Props {}

const App: NextPage = () => {
  return (
    <>
      <Gnb />
      <Frame>
        <FrameWrap>
          <SnbProfileWrap>
            <SnbProfile />
          </SnbProfileWrap>

          <TimelineWrap>
            <WritePost />
            <Timeline />
          </TimelineWrap>

          <SnbRecommendWrap>
            <SnbRecommend />
          </SnbRecommendWrap>
        </FrameWrap>
      </Frame>
    </>
  );
};

export default App;
