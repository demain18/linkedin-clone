import P from "@/components/atoms/typography/p/P";
import React from "react";
import {
  SeeMoreIconWrap,
  SeeMoreWrap,
  SnbFundingFooterStyled,
} from "./SnbFundingFooterStyles";
import LaunchIcon from "@material-ui/icons/Launch";

export interface Props {}

const SnbFundingFooter = ({ ...rest }: Props) => {
  return (
    <SnbFundingFooterStyled {...rest}>
      <SeeMoreWrap>
        <P fontSize={16} color="primary" bold>
          See more info
        </P>
        <SeeMoreIconWrap>
          <LaunchIcon style={{ fontSize: 16 }} />
        </SeeMoreIconWrap>
      </SeeMoreWrap>
    </SnbFundingFooterStyled>
  );
};
export default SnbFundingFooter;

export const defaultProps: Props = {};
SnbFundingFooter.defaultProps = {};
