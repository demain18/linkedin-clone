import type { NextPage } from "next";
import Gnb from "@/components/organisms/gnb/Gnb";
import { Frame, FrameWrap } from "@/styles/moduleStyles";
import { useRouter } from "next/router";
import { GlobalWrap, MainWrap, SnbWrap } from "./companyStyles";
import SnbPageRecommend from "@/components/organisms/snbPageRecommend/SnbPageRecommend";
import SnbFunding from "@/components/organisms/snbFunding/SnbFunding";
import CompanyBanner from "@/components/organisms/companyBanner/CompanyBanner";
import CompanyOverview from "@/components/organisms/companyOverview/CompanyOverview";
import CompanyLocation from "@/components/organisms/companyLocation/CompanyLocation";
import { log } from "console";

export interface Props {}

const App: NextPage = () => {
  // const router = useRouter();
  // const { slug } = router.query;

  // console.log(slug);

  return (
    <>
      <Gnb />
      <Frame>
        <FrameWrap>
          <GlobalWrap>
            <MainWrap>
              <CompanyBanner />
              <CompanyOverview />
              <CompanyLocation />
            </MainWrap>
            <SnbWrap>
              <SnbFunding />
              <SnbPageRecommend />
            </SnbWrap>
          </GlobalWrap>
        </FrameWrap>
      </Frame>
    </>
  );
};

export default App;
