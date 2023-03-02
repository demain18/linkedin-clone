import P from "@/components/atoms/typography/p/P";
import SnbPageRecommendContent from "@/components/molecules/snbPageRecommend/snbPageRecommendContent/SnbPageRecommendContent";
import SnbPageRecommendFooter from "@/components/molecules/snbPageRecommend/snbPageRecommendFooter/SnbPageRecommendFooter";
import { log } from "console";
import { getCompanyRecommendPages } from "modules/api/apiRequest";
import { getCompanyRecommendPageDto } from "modules/api/apiRequest.dto";

import React from "react";
import { useQuery } from "react-query";
import {
  ContentWrap,
  HeaderWrap,
  SnbPageRecommendStyled,
} from "./SnbPageRecommendStyles";

export interface Props {}

const SnbPageRecommend = ({ ...rest }: Props) => {
  const { isLoading, error, data } = useQuery<getCompanyRecommendPageDto[]>(
    "companyRecommendPages",
    getCompanyRecommendPages
  );

  return (
    <SnbPageRecommendStyled {...rest}>
      <HeaderWrap>
        <P fontSize={20} bold>
          People also follow
        </P>
      </HeaderWrap>
      <ContentWrap>
        {data?.map((content, x) => {
          return x === data.length - 1 ? (
            <SnbPageRecommendContent
              key={x + "key"}
              pageImg={content.pageImg}
              pageName={content.pageName}
              pageCategory={content.pageCategory}
              pageFollowers={content.pageFollowers}
              dividerNone
            />
          ) : (
            <SnbPageRecommendContent
              key={x + "key"}
              pageImg={content.pageImg}
              pageName={content.pageName}
              pageCategory={content.pageCategory}
              pageFollowers={content.pageFollowers}
            />
          );
        })}
      </ContentWrap>
      <SnbPageRecommendFooter />
    </SnbPageRecommendStyled>
  );
};
export default SnbPageRecommend;
export const defaultProps: Props = {};

SnbPageRecommend.defaultProps = {};
