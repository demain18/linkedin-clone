import SnbFundingContent from "@/components/molecules/snbFunding/snbFundingContent/SnbFundingContent";
import SnbFundingFooter from "@/components/molecules/snbFunding/snbFundingFooter/SnbFundingFooter";
import SnbFundingHeader from "@/components/molecules/snbFunding/snbFundingHeader/SnbFundingHeader";
import React from "react";
import { SnbFundingStyled } from "./SnbFundingStyles";
import img from "@/public/images/avatar.png";
import { useQuery } from "react-query";
import { getCompanyFundingDto } from "modules/api/apiRequest.dto";
import { getCompanyFunding } from "modules/api/apiRequest";
import { getCompanyName } from "modules/hooks/getCompanyName";

export interface Props {}

const SnbFunding = ({ ...rest }: Props) => {
  const company = getCompanyName();
  const { data } = useQuery<getCompanyFundingDto>(
    ["companyFunding", company],
    () => getCompanyFunding(company)
  );

  return (
    <SnbFundingStyled {...rest}>
      <SnbFundingHeader
        companyName={data?.companyName}
        totalRounds={data?.totalRounds}
      />
      <SnbFundingContent
        round={data?.round}
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
