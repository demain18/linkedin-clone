import { boxRadius } from "@/styles/moduleStyles";
import styled, { css } from "styled-components";
import { Props } from "./CompanyJobsRecentCard";
import Image from "next/image";
import { transitionHover } from "@/styles/transitionStyles";

export const CompanyJobsRecentCardStyled = styled.div<Props>`
  padding: 12px;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.grayPoint1};
  ${boxRadius}
  ${transitionHover}
  cursor: pointer;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  }
`;

export const LogoImgWrap = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
`;

export const LogoImg = styled(Image)``;

export const ContentWrap = styled.div`
  width: 100%;
  margin-top: 8px;
`;

export const RecruitWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 12px 0px;

  svg {
    color: ${(props) => props.theme.green};
  }
`;
