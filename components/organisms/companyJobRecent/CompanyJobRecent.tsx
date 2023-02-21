import P from "@/components/atoms/typography/p/P";
import CompanyJobsRecentButton from "@/components/molecules/companyJobsRecent/companyJobsRecentButton/CompanyJobsRecentButton";
import CompanyJobsRecentCard from "@/components/molecules/companyJobsRecent/companyJobsRecentCard/CompanyJobsRecentCard";
import CompanyJobsRecentFooter from "@/components/molecules/companyJobsRecent/companyJobsRecentFooter/CompanyJobsRecentFooter";
import React from "react";
import {
  CarouselMenuWrap,
  CarouselWrap,
  CompanyJobRecentStyled,
  HeaderWrap,
} from "./CompanyJobRecentStyles";

export interface Props {}

const CompanyJobRecent = ({ ...rest }: Props) => {
  return (
    <CompanyJobRecentStyled {...rest}>
      <HeaderWrap>
        <P fontSize={18} color="grayPoint9">
          Recently posted jobs
        </P>
        <CarouselMenuWrap>
          <CompanyJobsRecentButton prev />
          <CompanyJobsRecentButton next />
        </CarouselMenuWrap>
      </HeaderWrap>
      <CarouselWrap>
        <CompanyJobsRecentCard />
      </CarouselWrap>
      <CompanyJobsRecentFooter />
    </CompanyJobRecentStyled>
  );
};
export default CompanyJobRecent;

export const defaultProps: Props = {};
CompanyJobRecent.defaultProps = {};
