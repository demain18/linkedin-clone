import React, { useState } from "react";
import {
  ActivelyWrap,
  CompanyWrap,
  ContentWrap,
  InfoWrap,
  JobListContentStyled,
  LogoImage,
  LogoImgWrap,
  TitleWrap,
} from "./JobListContentStyles";
import logo from "@/public/images/dummys/company/toss.png";
import dummyLogo from "@/public/images/avatar.png";
import P from "@/components/atoms/typography/p/P";
import Span from "@/components/atoms/typography/span/Span";
import { RssFeed } from "@material-ui/icons";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Redirect from "@/components/atoms/redirect/Redirect";

export interface Props {
  active?: boolean;
  uid?: number;
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
  uid,
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
  const [hover, setHover] = useState(false);

  const mouseHover = (event) => {
    setHover(event);
  };

  return (
    <Link href={`/jobs?uid=${uid}`} passHref>
      <JobListContentStyled
        {...rest}
        active={active}
        onMouseEnter={() => mouseHover(true)}
        onMouseLeave={() => mouseHover(false)}
      >
        <LogoImgWrap>
          <LogoImage src={employerLogo!} layout="fill" objectFit="cover" />
        </LogoImgWrap>
        <ContentWrap>
          <TitleWrap hover={hover}>
            <P color="primary" bold>
              {title}
            </P>
          </TitleWrap>

          <CompanyWrap>
            <Redirect href={`/company/${employerCompanyUid}`}>
              <P fontSize={14}>{employerCompany}</P>
            </Redirect>
          </CompanyWrap>

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
    </Link>
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
