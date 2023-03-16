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
import Redirect from "@/components/atoms/redirect/Redirect";

export interface Props {
  pageImg?: StaticImageData;
  pageName?: string;
  pageUid?: string;
  pageCategory?: string;
  pageFollowers?: number;
  dividerNone?: boolean;
}

const SnbPageRecommendContent = ({
  pageImg,
  pageName,
  pageUid,
  pageCategory,
  pageFollowers,
  dividerNone,
  ...rest
}: Props) => {
  return (
    <SnbPageRecommendContentStyled dividerNone={dividerNone} {...rest}>
      <PageImgWrap>
        <PageImg src={pageImg!} layout="fill" objectFit="cover" />
      </PageImgWrap>
      <ContentWrap>
        <Redirect href={`/company/${pageUid}`}>
          <P fontSize={16} bold>
            {pageName}
          </P>
        </Redirect>
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
  dividerNone: false,
};
SnbPageRecommendContent.defaultProps = {
  pageImg: img,
  dividerNone: false,
};
