import type { NextPage } from "next";
import Gnb from "@/components/organisms/gnb/Gnb";
import { Frame, FrameWrap } from "@/styles/moduleStyles";
import { useRouter } from "next/router";
import {
  CompanyWrap,
  GlobalWrap,
  MainWrap,
  PostContentWrap,
  PostSnbWrap,
  PostsWrap,
  SnbWrap,
} from "@/styles/pages/companyStyles";
import SnbPageRecommend from "@/components/organisms/snbPageRecommend/SnbPageRecommend";
import SnbFunding from "@/components/organisms/snbFunding/SnbFunding";
import CompanyBanner from "@/components/organisms/companyBanner/CompanyBanner";
import CompanyOverview from "@/components/organisms/companyOverview/CompanyOverview";
import CompanyLocation from "@/components/organisms/companyLocation/CompanyLocation";
import { useEffect, useState } from "react";
import CompanyPostSnb from "@/components/organisms/companyPostSnb/CompanyPostSnb";
import Timeline from "@/components/organisms/timeline/Timeline";
import CompanyJobAlert from "@/components/organisms/companyJobAlert/CompanyJobAlert";
import CompanyJobSearch from "@/components/organisms/companyJobSearch/CompanyJobSearch";
import CompanyJobRecent from "@/components/organisms/companyJobRecent/CompanyJobRecent";
import { getCompanyName } from "modules/hooks/getCompanyName";

export interface Props {}

const App: NextPage = () => {
  const [slugNow, setSlugNow] = useState<any>();
  const company = getCompanyName();
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
                <CompanyWrap>
                  <CompanyOverview />
                  <CompanyLocation />
                </CompanyWrap>
              )}
              {slugNow === "posts" && (
                <PostsWrap>
                  <PostSnbWrap>
                    <CompanyPostSnb />
                  </PostSnbWrap>
                  <PostContentWrap>
                    <Timeline selectedCompany={company} />
                  </PostContentWrap>
                </PostsWrap>
              )}
              {slugNow === "jobs" && (
                <CompanyWrap>
                  <CompanyJobAlert />
                  <CompanyJobSearch />
                  <CompanyJobRecent />
                </CompanyWrap>
              )}
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
