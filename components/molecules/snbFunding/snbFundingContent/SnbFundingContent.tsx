import P from "@/components/atoms/typography/p/P";
import Span from "@/components/atoms/typography/span/Span";
import React from "react";
import {
  InvestorImg,
  InvestorImgPlacehoder,
  InvestorImgWrap,
  InvestorWrap,
  SeriesInfo,
  SnbFundingContentStyled,
} from "./SnbFundingContentStyles";
import logo from "@/public/images/dummys/company/kakao_pay.png";

export interface Props {}

const SnbFundingContent = ({ ...rest }: Props) => {
  return (
    <SnbFundingContentStyled {...rest}>
      <P>Last Round</P>

      <SeriesInfo>
        <Span fontSize={14} color="grayPoint6" bold>
          Series G
        </Span>
        <Span fontSize={14} color="grayPoint6" bold>
          {" · "}
        </Span>
        <Span fontSize={14} color="grayPoint6">
          Dec 18, 2022
        </Span>
      </SeriesInfo>
      <P fontSize={24} color="grayPoint6" light>
        US$ 405M
      </P>

      <SeriesInfo>
        <Span fontSize={14} color="grayPoint6" bold>
          Investors
        </Span>
      </SeriesInfo>

      <InvestorWrap>
        <InvestorImgWrap>
          <InvestorImg src={logo} layout="fill" objectFit="cover" />
        </InvestorImgWrap>
        <Span fontSize={14} color="grayPoint6">
          카카오페이(Kakaopay)
        </Span>
      </InvestorWrap>
      <InvestorWrap>
        <InvestorImgPlacehoder>
          <Span fontSize={12} color="grayPoint6">
            4+
          </Span>
        </InvestorImgPlacehoder>
        <Span fontSize={14} color="grayPoint6">
          Other Investors
        </Span>
      </InvestorWrap>
    </SnbFundingContentStyled>
  );
};
export default SnbFundingContent;

export const defaultProps: Props = {};
SnbFundingContent.defaultProps = {};
