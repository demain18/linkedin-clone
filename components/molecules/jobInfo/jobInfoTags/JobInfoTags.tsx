import Span from "@/components/atoms/typography/span/Span";
import React from "react";
import {
  JobInfoTagsStyled,
  TagIconStyled,
  TagStyled,
} from "./JobInfoTagsStyles";
import {
  Work,
  Business,
  People,
  Star,
  PlaylistAddCheck,
} from "@material-ui/icons";

export interface Props {
  jobForm?: string;
  employerCompany?: {
    employeeCounts?: string;
    companyKinds?: string;
  };
  connects?: {
    connection?: number;
    alummi?: number;
  };
  applicants?: number;
  skills?: string[];
}

const JobInfoTags = ({
  jobForm,
  employerCompany,
  connects,
  applicants,
  skills,
  ...rest
}: Props) => {
  return (
    <JobInfoTagsStyled {...rest}>
      <TagStyled>
        <TagIconStyled>
          <Work style={{ fontSize: 20 }} />
        </TagIconStyled>
        <Span fontSize={14}>{jobForm}</Span>
      </TagStyled>
      <TagStyled>
        <TagIconStyled>
          <Business style={{ fontSize: 20 }} />
        </TagIconStyled>
        <Span
          fontSize={14}
        >{`${employerCompany?.employeeCounts} employees`}</Span>
        <Span fontSize={14}>·</Span>{" "}
        <Span fontSize={14}>{employerCompany?.companyKinds}</Span>
      </TagStyled>
      <TagStyled>
        <TagIconStyled>
          <People style={{ fontSize: 20 }} />
        </TagIconStyled>
        <Span fontSize={14}>{`${connects?.connection} connections`}</Span>
        <Span fontSize={14}>·</Span>{" "}
        <Span fontSize={14}>{`${connects?.alummi} school alumni`}</Span>
      </TagStyled>
      <TagStyled>
        <TagIconStyled>
          <Star style={{ fontSize: 20 }} />
        </TagIconStyled>
        <Span
          fontSize={14}
        >{`See how you compare to ${applicants} applicants. Try Premium for free`}</Span>
      </TagStyled>
      <TagStyled>
        <TagIconStyled>
          <PlaylistAddCheck style={{ fontSize: 20 }} />
        </TagIconStyled>
        <div>
          {skills?.map((i, x) => (
            <Span key={i + x} fontSize={14}>
              {x === skills.length - 1 ? `${i}` : `${i}, `}
            </Span>
          ))}
        </div>
      </TagStyled>
    </JobInfoTagsStyled>
  );
};
export default JobInfoTags;

export const defaultProps: Props = {
  jobForm: "Full-time",
  employerCompany: {
    employeeCounts: "501 - 1,000",
    companyKinds: "IT Services and IT Consulting",
  },
  connects: {
    connection: 1,
    alummi: 5,
  },
  applicants: 6,
  skills: [
    "Continuous Integration and Continuous Delivery (CI/CD)",
    "DevOps",
    "Software Development",
    "Cloud Computing",
    "Test Automation",
  ],
};
JobInfoTags.defaultProps = {};
