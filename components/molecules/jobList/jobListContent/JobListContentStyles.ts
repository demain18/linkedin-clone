import styled, { css } from "styled-components";
import { Props } from "./JobListContent";
import Image from "next/image";
import { nonSelect } from "@/styles/moduleStyles";
interface ElementProps {
  hover: boolean;
}

export const JobListContentStyled = styled.div<Props>`
  padding: 8px 0px 0px 8px;
  background-color: ${(props) => props.theme.white};
  display: flex;
  gap: 10px;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      background-color: ${(props) => props.theme.primaryLight};
    `}
`;

export const LogoImgWrap = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
`;

export const LogoImage = styled(Image)`
  ${nonSelect}
`;

export const TitleWrap = styled.div`
  ${(props: ElementProps) =>
    props.hover &&
    css`
      p {
        text-decoration: underline;
      }
    `}
`;

export const ContentWrap = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid ${(props) => props.theme.grayPoint1};
  padding-bottom: 8px;
`;

export const CompanyWrap = styled.div`
  display: inline-block;
`;

export const ActivelyWrap = styled.div`
  margin-top: 5px;
  display: flex;

  color: ${(props) => props.theme.green};
`;

export const InfoWrap = styled.div`
  margin-top: 6px;
  display: flex;
  gap: 3px;
`;
