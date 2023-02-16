import type { NextPage } from "next";
import Gnb from "@/components/organisms/gnb/Gnb";
import { Frame, FrameWrap } from "@/styles/moduleStyles";
import { useRouter } from "next/router";
import { ContentWrap, GlobalWrap, MainWrap, SnbWrap } from "./companyStyles";
import SnbPageRecommend from "@/components/organisms/snbPageRecommend/SnbPageRecommend";
import SnbFunding from "@/components/organisms/snbFunding/SnbFunding";
import CompanyBanner from "@/components/organisms/companyBanner/CompanyBanner";
import CompanyOverview from "@/components/organisms/companyOverview/CompanyOverview";
import CompanyLocation from "@/components/organisms/companyLocation/CompanyLocation";
import { useEffect, useState } from "react";

export interface Props {}

const App: NextPage = () => {
  const [slugNow, setSlugNow] = useState<any>();

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if ((slug?.length || 0) > 1) {
      setSlugNow(slug![1]);
    } else {
      setSlugNow("about");
    }

    // console.log(slugNow);
  }, [slug]);

  return (
    <>
      <Gnb />
      <Frame>
        <FrameWrap>
          <GlobalWrap>
            <MainWrap>
              <CompanyBanner />
              {slugNow === "about" && (
                <ContentWrap>
                  <CompanyOverview />
                  <CompanyLocation />
                </ContentWrap>
              )}
              {slugNow === "posts" && <ContentWrap>posts</ContentWrap>}
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
