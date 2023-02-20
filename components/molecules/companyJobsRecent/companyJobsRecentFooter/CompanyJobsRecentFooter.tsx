import P from "@/components/atoms/typography/p/P";
import React from "react";
import {
  CompanyJobsRecentFooterStyled,
  SeeJobsWrap,
} from "./CompanyJobsRecentFooterStyles";
import { Launch } from "@material-ui/icons";

export interface Props {}

const CompanyJobsRecentFooter = ({ ...rest }: Props) => {
  return (
    <CompanyJobsRecentFooterStyled {...rest}>
      <SeeJobsWrap>
        <P fontSize={16} color="primary" bold>
          See all jobs
        </P>
      </SeeJobsWrap>
    </CompanyJobsRecentFooterStyled>
  );
};
export default CompanyJobsRecentFooter;

export const defaultProps: Props = {};
CompanyJobsRecentFooter.defaultProps = {};
