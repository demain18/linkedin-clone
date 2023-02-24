import H1 from "@/components/atoms/typography/h1/H1";
import Span from "@/components/atoms/typography/span/Span";
import React from "react";
import { JobInfoHeaderStyled, TagsWrap } from "./JobInfoHeaderStyles";

export interface Props {
  title?: string;
  employerCompany?: string;
  country?: string;
  jobForm?: string;
  datetime?: string;
  applicants?: number;
}

const JobInfoHeader = ({
  title,
  employerCompany,
  country,
  jobForm,
  datetime,
  applicants,
  ...rest
}: Props) => {
  return (
    <JobInfoHeaderStyled {...rest}>
      <H1>{title}</H1>
      <TagsWrap>
        <Span fontSize={14}>{employerCompany}</Span>
        <Span fontSize={14}>·</Span>
        <Span fontSize={14}>{`${country} (${jobForm})`}</Span>
        <Span fontSize={14}>·</Span>
        <Span fontSize={14}>{datetime}</Span>
        {applicants && (
          <>
            <Span fontSize={14}>·</Span>
            <Span fontSize={14} color="green">
              {`${applicants!.toLocaleString()} applicants`}
            </Span>
          </>
        )}
      </TagsWrap>
    </JobInfoHeaderStyled>
  );
};
export default JobInfoHeader;

export const defaultProps: Props = {
  title: "인프라/클라우드 보안 담당자",
  employerCompany: "카카오페이 (kakaopay)",
  country: "Gyeonggi, South Korea",
  jobForm: "On-site",
  datetime: "3 weeks ago",
  applicants: 5,
};
JobInfoHeader.defaultProps = {};
