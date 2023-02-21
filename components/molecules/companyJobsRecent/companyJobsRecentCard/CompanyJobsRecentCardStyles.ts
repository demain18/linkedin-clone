import { boxRadius, nonSelect } from "@/styles/moduleStyles";
import styled, { css } from "styled-components";
import { Props } from "./CompanyJobsRecentCard";
import Image from "next/image";
import { transitionHover } from "@/styles/transitionStyles";

export const CompanyJobsRecentCardStyled = styled.div<Props>`
  position: relative;
  padding: 12px;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.grayPoint1};
  ${boxRadius}
  ${transitionHover}
  ${nonSelect}
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

export const BookmarkWrap = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 22px;
  right: 18px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${transitionHover}

  :hover {
    background-color: ${(props) => props.theme.grayPoint1};
  }

  :active {
    background-color: ${(props) => props.theme.grayPoint2};
  }

  svg {
    color: ${(props) => props.theme.grayPoint6};
  }
`;
