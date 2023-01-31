import P from "@/components/atoms/typography/p/P";
import React from "react";
import { IconWrap, SnbFundingHeaderStyled } from "./SnbFundingHeaderStyles";
import MoreHorizIcon from "@material-ui/icons//MoreHoriz";

export interface Props {
  companyName?: string;
  totalRounds?: number;
}

const SnbFundingHeader = ({ companyName, totalRounds, ...rest }: Props) => {
  return (
    <SnbFundingHeaderStyled {...rest}>
      <P fontSize={20} bold>
        Funding via Crunchbase
      </P>
      <P fontSize={14} light>
        {`${companyName} · ${totalRounds} total rounds`}
      </P>
      <IconWrap>
        <MoreHorizIcon style={{ fontSize: 24 }} />
      </IconWrap>
    </SnbFundingHeaderStyled>
  );
};
export default SnbFundingHeader;

export const defaultProps: Props = {
  companyName: "Viva Republica (Toss)",
  totalRounds: 13,
};
SnbFundingHeader.defaultProps = {};
