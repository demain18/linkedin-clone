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
import img from "@/public/images/avatar.png";
import { StaticImageData } from "next/image";

export interface Props {
  series?: string;
  lastSeriesDatetime?: string;
  seriesAmount?: string;
  investorCompanyImg?: StaticImageData;
  investorCompanyName?: string;
  investorCount?: number;
}

const SnbFundingContent = ({
  series,
  lastSeriesDatetime,
  seriesAmount,
  investorCompanyImg,
  investorCompanyName,
  investorCount,
  ...rest
}: Props) => {
  return (
    <SnbFundingContentStyled {...rest}>
      <P>Last Round</P>

      <SeriesInfo>
        <Span fontSize={14} color="grayPoint6" bold>
          {`Series ${series}`}
        </Span>
        <Span fontSize={14} color="grayPoint6" bold>
          {" · "}
        </Span>
        <Span fontSize={14} color="grayPoint6">
          {lastSeriesDatetime}
        </Span>
      </SeriesInfo>
      <P fontSize={24} color="grayPoint6" light>
        {`US$ ${seriesAmount}`}
      </P>

      <SeriesInfo>
        <Span fontSize={14} color="grayPoint6" bold>
          Investors
        </Span>
      </SeriesInfo>

      <InvestorWrap>
        <InvestorImgWrap>
          <InvestorImg
            src={investorCompanyImg!}
            layout="fill"
            objectFit="cover"
          />
        </InvestorImgWrap>
        <Span fontSize={14} color="grayPoint6">
          {investorCompanyName}
        </Span>
      </InvestorWrap>
      {investorCount && (
        <InvestorWrap>
          <InvestorImgPlacehoder>
            <Span fontSize={12} color="grayPoint6">
              {`${investorCount}+`}
            </Span>
          </InvestorImgPlacehoder>
          <Span fontSize={14} color="grayPoint6">
            Other Investors
          </Span>
        </InvestorWrap>
      )}
    </SnbFundingContentStyled>
  );
};
export default SnbFundingContent;

export const defaultProps: Props = {
  series: "G",
  lastSeriesDatetime: "Dec 18, 2022",
  seriesAmount: "405M",
  investorCompanyImg: logo,
  investorCompanyName: "카카오페이(Kakaopay)",
  investorCount: 5,
};
SnbFundingContent.defaultProps = {
  investorCompanyImg: img,
};
