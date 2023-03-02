import P from "@/components/atoms/typography/p/P";
import React from "react";
import { JobListHeaderStyled } from "./JobListHeaderStyles";

export interface Props {}

const JobListHeader = ({ ...rest }: Props) => {
  return (
    <JobListHeaderStyled {...rest}>
      <P>Jobs based on your Profile</P>
    </JobListHeaderStyled>
  );
};
export default JobListHeader;

export const defaultProps: Props = {};
JobListHeader.defaultProps = {};
