import P from "@/components/atoms/typography/p/P";
import React from "react";
import { CompanyOverviewStyled, ContentWrap } from "./CompanyOverviewStyles";

export interface Props {}

const CompanyOverview = ({ ...rest }: Props) => {
  return (
    <CompanyOverviewStyled {...rest}>
      <P fontSize={20} bold>
        Overview
      </P>
      <P fontSize={14} color="grayPoint6">
        대한민국 금융을 혁신해 나가는 토스와 함께할 동료를 찾습니다. 토스의
        목표는 명확합니다.불편하고 복잡한 금융의 문제를 토스가 끝내려고 합니다.
        토스에는 이 꿈에 가슴이 뛰는 사람들이 모여있습니다. 누구에게나 상식적인
        금융, 최고의 사용 경험, 쓸 때마다 행복감을 느끼는 금융 서비스를 만들고자
        합니다.
      </P>
      <ContentWrap>
        <P fontSize={14} bold>
          Website
        </P>
        <P fontSize={14} color="grayPoint6">
          https://im.toss
        </P>
      </ContentWrap>{" "}
      <ContentWrap>
        <P fontSize={14} bold>
          Industry
        </P>
        <P fontSize={14} color="grayPoint6">
          Financial Services
        </P>
      </ContentWrap>{" "}
      <ContentWrap>
        <P fontSize={14} bold>
          Company size
        </P>
        <P fontSize={14} color="grayPoint6">
          1,001-5,000 employees
        </P>
        <P fontSize={14} color="grayPoint6">
          1,171 on LinkedIn
        </P>
      </ContentWrap>
      <ContentWrap>
        <P fontSize={14} bold>
          Headquarters
        </P>
        <P fontSize={14} color="grayPoint6">
          Seoul , Seoul
        </P>
      </ContentWrap>
    </CompanyOverviewStyled>
  );
};
export default CompanyOverview;

export const defaultProps: Props = {};
CompanyOverview.defaultProps = {};
