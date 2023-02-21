import Input from "@/components/atoms/forms/field/Input";
import RoundButton from "@/components/atoms/roundButton/RoundButton";
import P from "@/components/atoms/typography/p/P";
import { getCompanyBanner } from "modules/api/apiRequest";
import { getCompanyBannerDto } from "modules/api/apiRequest.dto";
import React from "react";
import { useQuery } from "react-query";
import { CompanyJobSearchStyled, SearchWrap } from "./CompanyJobSearchStyles";

export interface Props {}

const CompanyJobSearch = ({ ...rest }: Props) => {
  const { isLoading, error, data } = useQuery<getCompanyBannerDto>(
    "companyJobSearch",
    getCompanyBanner
  );

  return (
    <CompanyJobSearchStyled {...rest}>
      <P color="grayPoint9" fontSize={20}>
        {`${data?.name} has 999 job openings - find the one for you.`}
      </P>
      <SearchWrap>
        <Input placeholder="Job title or keyword" />
        <RoundButton color="primary" fillBtn>
          <P bold>Search</P>
        </RoundButton>
      </SearchWrap>
    </CompanyJobSearchStyled>
  );
};
export default CompanyJobSearch;

export const defaultProps: Props = {};
CompanyJobSearch.defaultProps = {};
