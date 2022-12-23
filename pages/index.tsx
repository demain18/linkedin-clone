import type { NextPage } from "next";
import SnbProfile from "@/components/organisms/snbProfile/SnbProfile";
import Gnb from "@/components/organisms/gnb/Gnb";
import { Frame, FrameWrap } from "./indexStyles";

export interface Props {}

const App: NextPage = () => {
  return (
    <>
      <Gnb />
      <Frame>
        <FrameWrap>asdf</FrameWrap>
      </Frame>
    </>
  );
};

export default App;
