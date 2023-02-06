import P from "@/components/atoms/typography/p/P";
import SnbPageRecommendContent from "@/components/molecules/snbPageRecommend/snbPageRecommendContent/SnbPageRecommendContent";
import SnbPageRecommendFooter from "@/components/molecules/snbPageRecommend/snbPageRecommendFooter/SnbPageRecommendFooter";

import React from "react";
import {
  ContentWrap,
  HeaderWrap,
  SnbPageRecommendStyled,
} from "./SnbPageRecommendStyles";

export interface Props {}

const SnbPageRecommend = ({ ...rest }: Props) => {
  return (
    <SnbPageRecommendStyled {...rest}>
      <HeaderWrap>
        <P fontSize={20} bold>
          People also follow
        </P>
      </HeaderWrap>
      <ContentWrap>
        <SnbPageRecommendContent />
      </ContentWrap>
      <SnbPageRecommendFooter />
    </SnbPageRecommendStyled>
  );
};
export default SnbPageRecommend;

export const defaultProps: Props = {};
SnbPageRecommend.defaultProps = {};
