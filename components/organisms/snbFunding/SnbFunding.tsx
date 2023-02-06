import SnbFundingContent from "@/components/molecules/snbFunding/snbFundingContent/SnbFundingContent";
import SnbFundingFooter from "@/components/molecules/snbFunding/snbFundingFooter/SnbFundingFooter";
import SnbFundingHeader from "@/components/molecules/snbFunding/snbFundingHeader/SnbFundingHeader";
import React from "react";
import { SnbFundingStyled } from "./SnbFundingStyles";
import img from "@/public/images/avatar.png";
import { useQuery } from "react-query";
import {
  getCompanyFundingDto,
  getUserListDto,
} from "modules/api/apiRequest.dto";
import { getCompanyFunding, getUserList } from "modules/api/apiRequest";
import { log } from "console";

export interface Props {}

const SnbFunding = ({ ...rest }: Props) => {
  const { isLoading, error, data } = useQuery<getCompanyFundingDto>(
    "companyFunding",
    getCompanyFunding
  );

  return (
    <SnbFundingStyled {...rest}>
      <SnbFundingHeader
        companyName={data?.companyName}
        totalRounds={data?.totalRounds}
      />
      <SnbFundingContent
        series={data?.series}
        lastSeriesDatetime={data?.lastSeriesDatetime}
        seriesAmount={data?.seriesAmount}
        investorCompanyImg={data?.investorCompanyImg}
        investorCompanyName={data?.investorCompanyName}
        investorCount={data?.investorCount}
      />
      <SnbFundingFooter />
    </SnbFundingStyled>
  );
};
export default SnbFunding;

export const defaultProps: Props = {};
SnbFunding.defaultProps = {};
