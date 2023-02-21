import React from "react";
import {
  BookmarkWrap,
  CompanyJobsRecentCardStyled,
  ContentWrap,
  LogoImg,
  LogoImgWrap,
  RecruitWrap,
} from "./CompanyJobsRecentCardStyles";
import tossLogoImg from "@/public/images/dummys/company/toss.png";
import P from "@/components/atoms/typography/p/P";
import { RssFeed } from "@material-ui/icons";
import Span from "@/components/atoms/typography/span/Span";
import { BookmarkBorder } from "@material-ui/icons";

export interface Props {}

const CompanyJobsRecentCard = ({ ...rest }: Props) => {
  return (
    <CompanyJobsRecentCardStyled {...rest}>
      <LogoImgWrap>
        <LogoImg src={tossLogoImg} layout="fill" objectFit="cover" />
      </LogoImgWrap>
      <ContentWrap>
        <P color="grayPoint9" bold>
          Frontend Developer (Internal Product)
        </P>
        <P fontSize={14} color="grayPoint9">
          Toss Bank
        </P>
        <P fontSize={14} color="grayPoint6">
          Seoul, Seoul, South Korea
        </P>
        <RecruitWrap>
          <RssFeed style={{ fontSize: 22 }} />
          <Span fontSize={12} color="grayPoint6" bold>
            Actively recruiting
          </Span>
        </RecruitWrap>
        <Span fontSize={12} color="grayPoint6">
          1 weeks ago
        </Span>
      </ContentWrap>
      <BookmarkWrap>
        <BookmarkBorder style={{ fontSize: 25 }} />
      </BookmarkWrap>
    </CompanyJobsRecentCardStyled>
  );
};
export default CompanyJobsRecentCard;

export const defaultProps: Props = {};
CompanyJobsRecentCard.defaultProps = {};
