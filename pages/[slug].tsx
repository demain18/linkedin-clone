import type { NextPage } from "next";
import Gnb from "@/components/organisms/gnb/Gnb";
import { Frame, FrameWrap } from "@/styles/moduleStyles";

export interface Props {}

const App: NextPage = () => {
  return (
    <>
      <Gnb />
      <Frame>
        <FrameWrap></FrameWrap>
      </Frame>
    </>
  );
};

export default App;
