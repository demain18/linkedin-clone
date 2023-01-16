import React from "react";
import {
  ActivelyWrap,
  ContentWrap,
  InfoWrap,
  JobListContentStyled,
  LogoImgStyled,
  LogoImgWrap,
} from "./JobListContentStyles";
import logo from "@/public/images/dummys/company/toss.png";
import P from "@/components/atoms/typography/p/P";
import Span from "@/components/atoms/typography/span/Span";
import { Info, RssFeed } from "@material-ui/icons";

export interface Props {}

const JobListContent = ({ ...rest }: Props) => {
  return (
    <JobListContentStyled {...rest}>
      <LogoImgWrap>
        <LogoImgStyled src={logo} layout="fill" objectFit="cover" />
      </LogoImgWrap>
      <ContentWrap>
        <P color="primary" bold>
          Frontend Developer
        </P>
        <P fontSize={14}>Viva Republica (Toss)</P>
        <P fontSize={14} color="grayPoint6">
          Seoul, Seoul, South Korea (On-site)
        </P>
        <ActivelyWrap>
          <RssFeed style={{ fontSize: 20 }} />
          <Span fontSize={12} color="grayPoint6">
            Actively recruiting
          </Span>
        </ActivelyWrap>
        <InfoWrap>
          <Span fontSize={12} color="grayPoint6">
            2 weeks ago
          </Span>
          <Span fontSize={12} color="grayPoint8">
            ·
          </Span>

          <Span fontSize={12} color="green" bold>
            5 applicants
          </Span>
        </InfoWrap>
      </ContentWrap>
    </JobListContentStyled>
  );
};
export default JobListContent;

export const defaultProps: Props = {};
JobListContent.defaultProps = {};
