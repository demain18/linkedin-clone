import P from "@/components/atoms/typography/p/P";
import React from "react";
import { SnbPageRecommendFooterStyled } from "./SnbPageRecommendFooterStyles";

export interface Props {}

const SnbPageRecommendFooter = ({ ...rest }: Props) => {
  return (
    <SnbPageRecommendFooterStyled {...rest}>
      <P color="grayPoint6" bold>
        See all recommended pages
      </P>
    </SnbPageRecommendFooterStyled>
  );
};
export default SnbPageRecommendFooter;

export const defaultProps: Props = {};
SnbPageRecommendFooter.defaultProps = {};
