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

export interface Props {
  jobTitle?: string;
  companyName?: string;
  companyRegion?: string;
  recruting?: boolean;
  timeAgo?: string;
}

const CompanyJobsRecentCard = ({
  jobTitle,
  companyName,
  companyRegion,
  recruting,
  timeAgo,
  ...rest
}: Props) => {
  return (
    <CompanyJobsRecentCardStyled {...rest}>
      <LogoImgWrap>
        <LogoImg src={tossLogoImg} layout="fill" objectFit="cover" />
      </LogoImgWrap>
      <ContentWrap>
        <P color="grayPoint9" bold>
          {jobTitle}
        </P>
        <P fontSize={14} color="grayPoint9">
          {companyName}
        </P>
        <P fontSize={14} color="grayPoint6">
          {companyRegion}
        </P>
        {recruting && (
          <RecruitWrap>
            <RssFeed style={{ fontSize: 21 }} />
            <Span fontSize={12} color="grayPoint6" bold>
              Actively recruiting
            </Span>
          </RecruitWrap>
        )}
        <Span fontSize={12} color="grayPoint6">
          {timeAgo}
        </Span>
      </ContentWrap>
      <BookmarkWrap>
        <BookmarkBorder style={{ fontSize: 25 }} />
      </BookmarkWrap>
    </CompanyJobsRecentCardStyled>
  );
};
export default CompanyJobsRecentCard;

export const defaultProps: Props = {
  jobTitle: "Frontend Developer (Internal Product)",
  companyName: "Viva Republica (Toss)",
  companyRegion: "Seoul, Seoul, South Korea",
  recruting: true,
  timeAgo: "1 weeks ago",
};
CompanyJobsRecentCard.defaultProps = {};
