import P from "@/components/atoms/typography/p/P";
import React from "react";
import { CompanyJobRecentStyled, HeaderWrap } from "./CompanyJobRecentStyles";

export interface Props {}

const CompanyJobRecent = ({ ...rest }: Props) => {
  return (
    <CompanyJobRecentStyled {...rest}>
      <HeaderWrap>
        <P fontSize={18} color="grayPoint9">
          Recently posted jobs
        </P>
      </HeaderWrap>
    </CompanyJobRecentStyled>
  );
};
export default CompanyJobRecent;

export const defaultProps: Props = {};
CompanyJobRecent.defaultProps = {};
