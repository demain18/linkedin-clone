import styled, { css } from "styled-components";
import { Props } from "./SnbFundingContent";
import Image from "next/image";

export const SnbFundingContentStyled = styled.div`
  padding: 12px 16px;
`;

export const SeriesInfo = styled.div`
  display: flex;
  gap: 7px;
  margin-top: 12px;
`;

export const InvestorWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 7px;
`;

export const InvestorImgPlacehoder = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.grayPoint2};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InvestorImgWrap = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
`;

export const InvestorImg = styled(Image)``;
