import Input from "@/components/atoms/forms/field/Input";
import RoundButton from "@/components/atoms/roundButton/RoundButton";
import P from "@/components/atoms/typography/p/P";
import React from "react";
import { CompanyJobSearchStyled, SearchWrap } from "./CompanyJobSearchStyles";

export interface Props {}

const CompanyJobSearch = ({ ...rest }: Props) => {
  return (
    <CompanyJobSearchStyled {...rest}>
      <P color="grayPoint9" fontSize={20}>
        Viva Republica (Toss) has 223 job openings - find the one for you.
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
