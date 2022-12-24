import type { NextPage } from "next";
import SnbProfile from "@/components/organisms/snbProfile/SnbProfile";
import Gnb from "@/components/organisms/gnb/Gnb";
import { Frame, FrameWrap } from "./indexStyles";
import SnbRecommend from "@/components/organisms/snbRecommend/SnbRecommend";
import Timeline from "@/components/organisms/timeline/Timeline";

export interface Props {}

const App: NextPage = () => {
  return (
    <>
      <Gnb />
      <Frame>
        <FrameWrap>
          <SnbProfile />
          <Timeline />
          <SnbRecommend />
        </FrameWrap>
      </Frame>
    </>
  );
};

export default App;
