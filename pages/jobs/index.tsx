import type { NextPage } from "next";
import Gnb from "@/components/organisms/gnb/Gnb";
import {} from "./indexStyles";
import { Frame, FrameWrap } from "@/styles/moduleStyles";

export interface Props {}

const App: NextPage = () => {
  return (
    <>
      <Gnb />
      <Frame>
        <FrameWrap>Jobs</FrameWrap>
      </Frame>
    </>
  );
};

export default App;
