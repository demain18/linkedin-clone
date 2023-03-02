import React from "react";
import {
  ActivelyWrap,
  ContentWrap,
  InfoWrap,
  JobListContentStyled,
  LogoImage,
  LogoImgWrap,
} from "./JobListContentStyles";
import logo from "@/public/images/dummys/company/toss.png";
import dummyLogo from "@/public/images/avatar.png";
import P from "@/components/atoms/typography/p/P";
import Span from "@/components/atoms/typography/span/Span";
import { RssFeed } from "@material-ui/icons";
import { StaticImageData } from "next/image";
import Link from "next/link";

export interface Props {
  active?: boolean;
  employerLogo?: StaticImageData;
  employerCompany?: string;
  employerCompanyUid?: string;
  title?: string;
  country?: string;
  jobForm?: string;
  actively?: boolean;
  datetime?: string;
  applicants?: number;
}

const JobListContent = ({
  active,
  employerLogo,
  employerCompany,
  employerCompanyUid,
  title,
  country,
  jobForm,
  actively,
  datetime,
  applicants,
  ...rest
}: Props) => {
  return (
    <JobListContentStyled {...rest} active={active}>
      <LogoImgWrap>
        <LogoImage src={employerLogo!} layout="fill" objectFit="cover" />
      </LogoImgWrap>
      <ContentWrap>
        <P color="primary" bold>
          {title}
        </P>
        <Link href={`/company/${employerCompanyUid}`} passHref>
          <a>
            <P fontSize={14}>{employerCompany}</P>
          </a>
        </Link>
        <P fontSize={14} color="grayPoint6">
          {`${country} (${jobForm})`}
        </P>
        {actively && (
          <ActivelyWrap>
            <RssFeed style={{ fontSize: 20 }} />
            <Span fontSize={12} color="grayPoint6">
              Actively recruiting
            </Span>
          </ActivelyWrap>
        )}
        <InfoWrap>
          <Span fontSize={12} color="grayPoint6">
            {datetime}
          </Span>

          {applicants! > 0 && (
            <>
              <Span fontSize={12} color="grayPoint8">
                ·
              </Span>
              <Span fontSize={12} color="green" bold>
                {`${applicants!.toLocaleString()} applicants`}
              </Span>
            </>
          )}
        </InfoWrap>
      </ContentWrap>
    </JobListContentStyled>
  );
};
export default JobListContent;

export const defaultProps: Props = {
  active: false,
  employerLogo: logo,
  employerCompany: "Viva Republica (Toss)",
  title: "Frontend Developer",
  country: "Seoul, Seoul, South Korea",
  jobForm: "On-site",
  actively: true,
  datetime: "2 weeks ago",
  applicants: 1,
};

JobListContent.defaultProps = {
  employerLogo: dummyLogo,
};
