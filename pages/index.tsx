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
import { toggleTheme } from "../modules/store/globalSlice";
import { RootState } from "../modules/store";
import { useEffect } from "react";

export interface Props {}

const App: NextPage = () => {
  // const themeIsLight = useSelector(
  //   (state: RootState) => state.global.themeIsLight
  // );
  const dispatch = useDispatch();
  const toggleThemeButton = () => dispatch(toggleTheme());

  // useEffect(() => {
  //   console.log(themeIsLight);
  // }, [themeIsLight]);

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
            <button onClick={toggleThemeButton}>Toggle Theme</button>
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
