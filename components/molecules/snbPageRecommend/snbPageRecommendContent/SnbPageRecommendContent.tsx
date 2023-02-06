import React from "react";
import {
  PageImg,
  PageImgWrap,
  SnbPageRecommendContentStyled,
  ContentWrap,
  ButtonContentWrap,
  RoundButtonWrap,
} from "./SnbPageRecommendContentStyles";
import img from "@/public/images/avatar.png";
import P from "@/components/atoms/typography/p/P";
import RoundButton from "@/components/atoms/roundButton/RoundButton";
import Add from "@material-ui/icons/Add";
import { StaticImageData } from "next/image";

export interface Props {
  pageImg?: StaticImageData;
  pageName?: string;
  pageCategory?: string;
  pageFollowers?: number;
}

const SnbPageRecommendContent = ({
  pageImg,
  pageName,
  pageCategory,
  pageFollowers,
  ...rest
}: Props) => {
  return (
    <SnbPageRecommendContentStyled {...rest}>
      <PageImgWrap>
        <PageImg src={pageImg!} layout="fill" objectFit="cover" />
      </PageImgWrap>
      <ContentWrap>
        <P fontSize={16} bold>
          {pageName}
        </P>
        <P fontSize={12}>{pageCategory}</P>
        {pageFollowers && (
          <P fontSize={12} color="grayPoint6">
            {`${pageFollowers.toLocaleString()} followers`}
          </P>
        )}
        <RoundButtonWrap>
          <RoundButton>
            <ButtonContentWrap>
              <Add style={{ fontSize: 20 }} />
              <P color="grayPoint6">Follow</P>
            </ButtonContentWrap>
          </RoundButton>
        </RoundButtonWrap>
      </ContentWrap>
    </SnbPageRecommendContentStyled>
  );
};
export default SnbPageRecommendContent;

export const defaultProps: Props = {
  pageImg: img,
  pageName: "카카오페이 (kakaopay)",
  pageCategory: "IT Services and IT Consulting",
  pageFollowers: 29466,
};
SnbPageRecommendContent.defaultProps = {
  pageImg: img,
};