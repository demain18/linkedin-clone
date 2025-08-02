import type { NextPage } from "next";
import Gnb from "@/components/organisms/gnb/Gnb";
import {
  EmptyPageAlertMsg,
  EmptyPageAlertWrap,
  Frame,
  FrameWrap,
} from "@/styles/moduleStyles";
import P from "@/components/atoms/typography/p/P";

export interface Props {}

const App: NextPage = () => {
  return (
    <>
      <Gnb />
      <Frame>
        <FrameWrap>
          <EmptyPageAlertWrap>
            <EmptyPageAlertMsg>
              <P>이 페이지는 아직 미완성입니다.</P>
            </EmptyPageAlertMsg>
          </EmptyPageAlertWrap>
        </FrameWrap>
      </Frame>
    </>
  );
};

export default App;
