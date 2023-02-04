import SnbFundingContent from "@/components/molecules/snbFunding/snbFundingContent/SnbFundingContent";
import SnbFundingFooter from "@/components/molecules/snbFunding/snbFundingFooter/SnbFundingFooter";
import SnbFundingHeader from "@/components/molecules/snbFunding/snbFundingHeader/SnbFundingHeader";
import React from "react";
import { SnbFundingStyled } from "./SnbFundingStyles";
import img from "@/public/images/avatar.png";

export interface Props {}

const SnbFunding = ({ ...rest }: Props) => {
  return (
    <SnbFundingStyled {...rest}>
      <SnbFundingHeader />
      <SnbFundingContent />
      <SnbFundingFooter />
    </SnbFundingStyled>
  );
};
export default SnbFunding;

export const defaultProps: Props = {};
SnbFunding.defaultProps = {};
