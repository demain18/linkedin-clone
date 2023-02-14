import type { NextPage } from "next";
import Gnb from "@/components/organisms/gnb/Gnb";
import { Frame, FrameWrap } from "@/styles/moduleStyles";
import { useRouter } from "next/router";

export interface Props {}

const App: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Gnb />
      <Frame>
        <FrameWrap>Company/{slug}</FrameWrap>
      </Frame>
    </>
  );
};

export default App;
