import type { NextPage } from "next";
import SnbProfile from "@/components/organisms/snbProfile/SnbProfile";
import Gnb from "@/components/organisms/gnb/Gnb";
import {
  Frame,
  FrameWrap,
  SnbProfileWrap,
  SnbRecommendWrap,
  TimelineWrap,
} from "./indexStyles";
import SnbRecommend from "@/components/organisms/snbRecommend/SnbRecommend";
import Timeline from "@/components/organisms/timeline/Timeline";
import WritePost from "@/components/organisms/writePost/WritePost";
import { useDispatch, useSelector } from "react-redux";
import { plusCounter } from "../modules/store/counterSlice";
import { RootState } from "../modules/store";
import { useEffect } from "react";

export interface Props {}

const App: NextPage = () => {
  const counterValue = useSelector((state: RootState) => state.counter.value);

  useEffect(() => {
    console.log(counterValue);
  }, [counterValue]);

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
